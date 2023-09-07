import axios from "axios";
import {deleteCookie, getCookie, setCookie} from "cookies-next";
import {isEmpty} from "lodash";

import {baseApiUrl} from "~/constants/globals";

import type {AxiosError, AxiosRequestHeaders} from "axios";

const BASE_URL = baseApiUrl;

const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

customAxios.interceptors.request.use((config) => {
  const token = getCookie("accessToken");

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  } as AxiosRequestHeaders;
  return config;
});

let isRefreshing = false;
let failedQueue: {
  resolve: (value: string | null) => void;
  reject: (reason: AxiosError) => void;
}[] = [];

const handleLogout = () => {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
  deleteCookie("wmsToken");
  deleteCookie("clientId");
  deleteCookie("authId");

  if (typeof window !== "undefined") {
    localStorage.clear();
    window.location.replace("/login");
  }
};

const processQueue = (error: AxiosError | null, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401) {
      return Promise.reject(err);
    }

    const refreshToken = getCookie("refreshToken");

    if (
      !refreshToken ||
      refreshToken === "undefined" ||
      isEmpty(refreshToken)
    ) {
      if (err.response.status === 403) handleLogout();
    }

    if (err.response.status === 301 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({resolve, reject});
        })
          .then((token) => {
            originalRequest.headers.Authorization = "Bearer " + token;
            isRefreshing = false;
            return customAxios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function (resolve, reject) {
        axios
          .post(`${BASE_URL}/v1/refresh-token`, {
            refresh_token: refreshToken,
          })
          .then((result) => {
            const usedToken = result.data?.data?.access_token;

            setCookie("accessToken", usedToken);
            setCookie("refreshToken", result.data?.data?.refresh_token);
            setCookie("refreshToken", result.data?.data?.refresh_token);
            setCookie("wmsToken", result.data?.data?.wms_token);

            customAxios.defaults.headers.common.Authorization =
              "Bearer " + usedToken;
            originalRequest.headers.Authorization = "Bearer " + usedToken;

            processQueue(null, usedToken);

            resolve(customAxios(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            // 422 refresh token tidak valid
            // 400 user tidak valid
            // 401 not autorized
            if ([422, 400, 401].includes(err.response.status)) {
              handleLogout();
            }

            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(err);
  },
);

export default customAxios;

import axios from "axios";
import {getCookie} from "cookies-next";

import {fmsApiUrl} from "~/constants/globals";

import type {AxiosRequestHeaders} from "axios";

const clientUpload = axios.create({
  baseURL: fmsApiUrl,
});

clientUpload.interceptors.request.use((config) => {
  const token = getCookie("wmsToken");

  config.headers = {
    ...config.headers,
    Authorization: `Token ${token}`,
    "Content-Type": "multipart/form-data",
  } as AxiosRequestHeaders;
  return config;
});

export default clientUpload;

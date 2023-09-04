import {setCookie} from "cookies-next";

import type {AuthData} from "~/interfaces/services/auth/login";

export const setCookieAuth = (auth: AuthData) => {
  setCookie("accessToken", auth.access_token);
  setCookie("refreshToken", auth.refresh_token);
  setCookie("wmsToken", auth.wms_token);
  setCookie("clientId", auth.client_id);
  setCookie("authId", auth.id);

  if (typeof window !== "undefined") {
    localStorage.setItem("authUser", JSON.stringify(auth.user));
  }
};

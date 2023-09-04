import {deleteCookie} from "cookies-next";
import {useRouter} from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    deleteCookie("wmsToken");
    deleteCookie("clientId");
    deleteCookie("authId");

    if (typeof window !== "undefined") {
      localStorage.clear();
    }

    router.replace("/login");
  };

  return {logout};
};

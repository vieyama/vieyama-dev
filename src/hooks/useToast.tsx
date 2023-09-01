import {toast as reactToast} from "react-toastify";

type ToastType = {
  message: string;
  position?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  type?: "info" | "success" | "warning" | "error";
  theme?: "light" | "dark";
};

const useToast = () => {
  const toast = ({
    message,
    position = "top-right",
    type = "info",
    theme = "light",
  }: ToastType) => {
    const defaultConfig = {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      position,
      theme,
    };
    switch (type) {
      case "error":
        return reactToast.error(message, defaultConfig);
      case "success":
        return reactToast.success(message, defaultConfig);
      case "warning":
        return reactToast.warn(message, defaultConfig);
      default:
        return reactToast.info(message, defaultConfig);
    }
  };
  return {toast};
};

export default useToast;

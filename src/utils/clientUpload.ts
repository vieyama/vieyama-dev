import axios from "axios";
import {getCookie} from "cookies-next";

import {fmsApiUrl} from "~/constants/globals";

const token = getCookie("wmsToken");

const clientUpload = axios.create({
  baseURL: fmsApiUrl,
  headers: {
    Authorization: `Token ${token}`,
    "Content-Type": "multipart/form-data",
  },
});

export default clientUpload;

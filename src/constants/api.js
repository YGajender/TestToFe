import axios from "axios";

export const BASEURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_BACKEND_URI_DEV
    : process.env.NEXT_PUBLIC_DEV_BACKEND_URI_PROD;

    export const axiosInstance = axios.create({ baseURL: `${BASEURL}` });
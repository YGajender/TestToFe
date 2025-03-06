import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../constants/api";
import { getToken } from "../utils/helper";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

const BACKEND_URL = BASEURL;

export const requestHandler = async (method, url, data, router) => {
  const token = getToken();


  let config;
  if (token) {
    config = {
      method,
      url: `${BACKEND_URL}${url}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    };
  } else {
    config = {
      method,
      url: `${BACKEND_URL}${url}`,
      data,
    };
  }

  try {
    const response = await axios(config);
    return response?.data;
  } catch (err) {
    if (err.response) {
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        destroyCookie(null, "token");
        destroyCookie(null, "userData");
        if (err.response?.data?.detail) toast.error(err.response.data.detail);
      } else if (err.response.status === 404) {
        // router.push("/404");
      } else {
        toast.error(err.response.data.message);
      }
    } else if (err.request) {
      toast.error("Slow Network Speed. Try Again later.");
    } else {
      toast.error("Oops!! Unusual error occurred");
    }
  }
};

import axios from "axios";

import { BASE_API_URL } from "@/constants/apiUrl.constants";

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      response: { status },
    } = error;
    if (status === 401) {
      // **Clear token local

      if (typeof window !== "undefined") window.location.href = "/dang-nhap";
    }
    return Promise.reject(error);
  },
);

api.defaults.headers.common.Authorization =
  typeof window !== "undefined" && localStorage.getItem("USER_TOKEN") != null
    ? `Bearer ${localStorage.getItem("USER_TOKEN")}`
    : null;

export function setAuthorization(token: any) {
  api.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
}

export function clearAuthorization() {
  delete api.defaults.headers.common.Authorization;
}

export function removeAuthorization() {
  setAuthorization(null);
}

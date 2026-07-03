/* eslint-disable  */
import axios from "axios";
const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;
const instance = axios.create({
  baseURL: SERVER_URL,
});

instance.interceptors.request.use(
  async (config: any) => {
    const access_token = localStorage.getItem("auth_token");

    if (access_token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${access_token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const GetData = async (url: string) => {
  const res = await instance.get(url);
  return res?.data;
};
export const Post = async (url: string, data: any) => {
  const res = await instance.post(url, data);
  return res?.data;
};
export const Patch = async (url: string, data: any) => {
  const res = await instance.patch(url, data);
  return res?.data;
};

/* eslint-disable  */
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

instance.interceptors.request.use(
  async (config: any) => {
    const access_token = localStorage.getItem("access_token");

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

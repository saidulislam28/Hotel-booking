import axios from "axios"


const base_url = process.env.NEXT_PUBLIC_SERVER_BASE_URL

export const get = async(url: string) =>{
  const res = await axios.get(base_url + url)
  return res?.data;
}

export const post = async(url:string)=>{
  const res = await axios.post(base_url + url)
  return res?.data;
}

export const patch = async (url: string, body: unknown) => {
  const res = await axios.patch(base_url + url, body);
  return res?.data;
};

export const del = async (url: string) => {
  const res = await axios.delete(base_url + url);
  return res?.data;
};


import {config} from "../api/config";
import axios from "../api/axios";
import {ITrack} from "../types/track";

export const save = async (data: any): Promise<any> => {
  try {
    const result = await axios.post(`${config.API_URL}api/song/sreate`, data);
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

export const fetchTrack = async (id: string): Promise<ITrack|string> => {
  const result = await axios.get<Promise<ITrack>>(`${config.API_URL}/api/song/${id}`);
  return result.data;
}

export const addListens = (id:string) => {
  axios.post(`${config.API_URL}/api/song/listens/${id}`);
}

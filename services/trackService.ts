import config from "../api/config";
import axios from "../api/axios";

export const save = async (data) => {
  try {
    const res = await axios.post(`${config.API_URL}/song/sreate`, data)
  } catch (e) {
    console.log(e)
  }
}
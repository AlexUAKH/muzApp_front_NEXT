import axios, {AxiosInstance} from "axios";
import config from "./config"

const instance:AxiosInstance = axios.create({
  baseURL: config.API_URL,
  timeout: config.TIMEOUT,
  headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
})

export default instance;


import axios from "axios";
import { BASE_URL_API, TIMEOUT } from "./constants";
export const http = axios.create({
  baseURL: BASE_URL_API,
  timeout: TIMEOUT,
});

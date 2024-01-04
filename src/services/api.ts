import axios from "axios";

export const api = axios.create({
  baseURL: "https://verzel-backend-production.up.railway.app/api",
  timeout: 9000,
});

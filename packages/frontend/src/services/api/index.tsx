import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const avatarApi = axios.create({
  baseURL: "https://ui-avatars.com/api/?name=",
});

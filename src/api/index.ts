import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_API_URL}/3`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_API_KEY}`,
  },
});

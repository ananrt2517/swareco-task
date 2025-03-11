import axiosInstance from "./axiosInstance";
import { END_POINTS } from "./constants";

export const getTasks = async () => {
  const response = await axiosInstance.get(`${END_POINTS.TODOS}?_limit=5`);

  return response.data;
};

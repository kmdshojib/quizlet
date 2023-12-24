import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import Axios, { AxiosRequestConfig, AxiosError } from "axios";

const axiosBaseQuery = (): BaseQueryFn<AxiosRequestConfig, unknown, AxiosError> => async ({ url, method, data, params }) => {
  try {
    // const baseURL = process.env.NODE_ENV === 'production'
    //   ? "https://quizlet-backend-phi.vercel.app/api/"
    //   : "http://localhost:5000/api/";

    Axios.defaults.baseURL = "https://quizlet-backend-phi.vercel.app/api/";

    const axiosConfig: AxiosRequestConfig = {
      url,
      method,
      params: { ...params },
    };

    if (method === "POST") {
      axiosConfig.data = data;
    }

    const result = await Axios(axiosConfig);
    return { data: result.data };
  } catch (axiosError) {
    const error = axiosError as AxiosError;
    return { error };
  }
};

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  reducerPath: "apiService",
});
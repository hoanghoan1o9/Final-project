//api/axiosClient.js
import axios from "axios";
import queryString from "queryString";
//set up default configure for http request here
const axiosClient = axios.create({
  baseUrl: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  //handle token here
  return config;
});

axiosClient.interceptors.request.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //handle error
    throw error;
  }
);

export default axiosClient;

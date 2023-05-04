import axios from 'axios';

const api = axios.create({
  // baseURL: "http://localhost:4000"
  baseURL: "https://booking-api-duhj.onrender.com/"
})

export const url = api.defaults.baseURL

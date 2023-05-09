import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:4000/api"
  // baseURL: "https://booking-api-duhj.onrender.com/api"
})

export const url = api.defaults.baseURL

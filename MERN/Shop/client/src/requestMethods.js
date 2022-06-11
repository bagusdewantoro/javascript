import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTg5NWM1YzQxYTI5ZGIyMzFiZjA0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDk2NzczMSwiZXhwIjoxNjU1MjI2OTMxfQ.1LHhBJa9VFEpmJRGmzoSUxMoESnp4YHABumILmHCYbQ';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {token: `Bearer ${TOKEN}`},
});

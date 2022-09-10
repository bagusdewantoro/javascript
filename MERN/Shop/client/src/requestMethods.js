import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
  localStorage.getItem('persist:root')
  ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser === null
    ? ''
    : JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken
  : ''

console.log(
  localStorage.getItem('persist:root')
  ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser === null
    ? 'not logged in yet, no token'
    : JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken
  : 'no local storage data'
)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {token: `Bearer ${TOKEN}`},
});

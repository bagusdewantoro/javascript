import axios from 'axios';

const prodURL = process.env.REACT_APP_BASE_URL;
const devURL = 'http://localhost:5000/api'

const BASE_URL = process.env.NODE_ENV === 'development'
  ? devURL
  : prodURL;

console.log(BASE_URL)
console.log(process.env.NODE_ENV)

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
  headers: {token: `Bearer ${TOKEN}`},
});


import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',  // Set your base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

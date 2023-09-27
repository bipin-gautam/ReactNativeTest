import axios from 'axios';

import {BASE_URL} from '../constants/Constants';
import {Alert} from 'react-native';
import {AUTH_TOKEN} from '../constants/Constants';
const axiosService = axios.create({
  baseURL: BASE_URL,
  timeout: 9000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const configureHeaders = async config => {
  const auth_token = AUTH_TOKEN;
  if (auth_token) {
    config.headers['Authorization'] = `Bearer ${auth_token}`;
  }

  return config;
};

// Add a request interceptor
axiosService.interceptors.request.use(
  async config => {
    const updatedConfig = await configureHeaders(config);
    return updatedConfig;
  },
  error => {
    console.log(error, 'error:::::::');
    return Promise.reject(error);
  },
);

// Response interceptor
axiosService.interceptors.response.use(
  response => response,
  async function (error) {
    handleAxiosError(error);

    return error.response;
  },
);

const handleAxiosError = error => {
  const errorMessage =
    error.response?.data?.details ||
    error.response?.data?.error ||
    error.message;

  if (errorMessage) {
    let msg = '';

    if (typeof errorMessage === 'string') {
      msg = errorMessage;
    } else if (typeof errorMessage === 'object') {
      msg = Object.values(errorMessage)
        .flatMap(err => (Array.isArray(err) ? err : [err]))
        .join(' ');
    }

    if (msg) {
      Alert.alert(msg);
      return msg;
    }
  }

  return '';
};

export default axiosService;

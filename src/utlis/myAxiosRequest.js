import axios from 'axios';
import { Constants } from '../constants/Constants';
import { Alert } from 'react-native';

const handleAxiosError = error => {
  const errorMessage =
    error.response?.data?.details ||
    error.response?.data?.error ||
    error.response?.data?.message ||
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
      // Handle the error message as needed (e.g., show it to the user)
      console.log(msg, 'errorMessage');
      Alert.alert(msg)
      // You can also dispatch an action or handle the error in other ways here.
      return msg;
    }
  }

  return msg;
};

const axiosInstance = axios.create({
  baseURL: Constants.baseUrl,
});

// Common Axios function that handles errors
const makeRequest = async (config, handleError = true) => {
  try {
    const response = await axiosInstance(config);
    return response;
  }  catch (error) {
    if (handleError) {
      return handleAxiosError(error);
    } else {
      return error;
    }
  }
};

export const myAxiosGetRequest = async endPoint => {
  return makeRequest({
    method: 'get',
    url: endPoint,
  });
};

export const myAxiosPostRequest = async (endPoint, data) => {
  return makeRequest({
    method: 'post',
    url: endPoint,
    data: data,
  });
};

export const myAxiosPutRequest = async (endPoint, id, data) => {
  return makeRequest({
    method: 'put',
    url: `${endPoint}/${id}`,
    data: data,
  });
};

export const myAxiosPatchRequest = async (endPoint, id, data) => {
  return makeRequest({
    method: 'patch',
    url: `${endPoint}/${id}`,
    data: data,
  });
};

export const myAxiosDeleteRequest = async (endPoint, id) => {
  return makeRequest({
    method: 'delete',
    url: `${endPoint}/${id}`,
  });
};

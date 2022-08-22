import axios, { AxiosRequestConfig } from "axios"
import { message } from 'antd';

const removeEmptyParams = (obj: Record<string, any>) => {
  let params = Object.assign({}, obj);
  for (const key in params) {
    if (
      params[key] === undefined ||
      params[key] === null ||
      params[key] === ''
    ) {
      delete params[key];
    }
  }
  return params;
};

axios.defaults.timeout = 600000
const Request = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('userAuth')
    ? JSON.parse(localStorage.getItem('userAuth') as string).token
    : "";
  return axios({
    ...config,
    headers: {
      token,
      ...config.headers
    },
    params: removeEmptyParams(config.params)
  }).then((response) => {
    if (response.status === 200) {
      // 发送成功
      if (response.data.code === 0) {
        // 成功
        return response.data.data
      } else {
        message.error(response.data.msg);
      }
    } else {
      message.error(response.data);
    }
  }).catch(error => {
    message.error(error.message);
  })
}

export default Request

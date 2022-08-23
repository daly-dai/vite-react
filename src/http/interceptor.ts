import axios, { AxiosRequestConfig } from 'axios'

import {
  handleRequestHeader,
  handleConfigureAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError
} from './tools'
import { TIME_OUT } from './config'

const axiosInstance = axios.create({
  timeout: TIME_OUT, // 设置统一的超时时长
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  // config = handleRequestHeader(config)
  config = handleConfigureAuth(config)
  return config
}, err => {
  return Promise.reject(err)
})

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data)

    handleAuthError(response.data.errno)
    handleGeneralError(response.data.errno, response.data.errmsg)
    return response
  },
  (err) => {
    handleNetworkError(err?.response?.status)
    Promise.reject(err?.response)
  }
)

export default axiosInstance
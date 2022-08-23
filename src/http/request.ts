
import axiosInstance from './interceptor'

import { RequestFn, RequestFunc } from '@/types/http'
import { AxiosRequestConfig } from 'axios';

/**
 * @param {Object} config
 * @param {string} config.url
 * @param {Object} config.params
 * @param {'get'|'post'} config.method
 * @param {'json'|'query'|'urlencoded'} config.format
 * @return {Promise}
 */
const request: RequestFunc = async ({
  url,
  params,
  method = 'post',
  format = 'json',
  action,
  config = {}
}) => {
  if (action) {
    action()
  }

  method === 'get' && (format = 'query');

  const defaultConfig = {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
    data: params,
    method
  }
  const formData = new FormData()

  if (format === 'formData') {
    Object.keys(params).map(key => {
      formData.append(key, params[key])
    })
  }

  const formatMap: any = {
    urlencoded: {
      ...defaultConfig,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: JSON.stringify(params)
    },
    query: { method, params },
    json: defaultConfig,
    formData: {
      ...defaultConfig,
      data: formData
    }
  }

  return axiosInstance(url, { ...formatMap[format], ...config } as AxiosRequestConfig)
}

const requestGet: RequestFn = (url, params, config, action) =>
  request({ url, params, method: 'get', action, config })

const requestPost: RequestFn = (url, params, config, format, action) =>
  request({ url, params, format, action, config })

const requestPut: RequestFn = (url, params, config,) =>
  request({ url, params, method: 'put', config })

const requestDelete: RequestFn = (url, params, config, format) =>
  request({ url, params, method: 'delete', format, config })

export { requestGet, requestPost, requestPut, requestDelete }

export default request
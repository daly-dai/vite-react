import service from './service'

interface Result {
  code: number;
  msg: string
}

// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
  data?: T;
}


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

  return service(url, { ...formatMap[format], ...config } as AxiosRequestConfig)
}

const get: RequestFn = (url, params, config, action) =>
  request({ url, params, method: 'get', action, config })

const post: RequestFn = (url, params, config, format, action) =>
  request({ url, params, format, action, config })

const put: RequestFn = (url, params, config,) =>
  request({ url, params, method: 'put', config })

const deleteFun: RequestFn = (url, params, config, format) =>
  request({ url, params, method: 'delete', format, config })

export { get, post, put, deleteFun }

export default request

// export function get<T>(url: string, params?: object): Promise<ResultData<T>> {
//   return service.get(url, { params });
// }

// export function post<T>(url: string, params?: object): Promise<ResultData<T>> {
//   return service.post(url, params);
// }

// export function put<T>(url: string, params?: object): Promise<ResultData<T>> {
//   return service.put(url, params);
// }

// export function deleteRequest<T>(url: string, params?: object): Promise<ResultData<T>> {
//   return service.delete(url, { params });
// }

import { AxiosRequestConfig } from "axios"

type RequestFn = (
  url: string,
  params: any,
  action?: any,
  format?: any,
  method?: string,

) => any

interface RequestConfig {
  url: string
  params: any
  method?: string
  format?: string
  action?: any,
  config?: AxiosRequestConfig
}

type RequestFunc = (arg0: RequestConfig) => any

export { RequestFn, RequestConfig, RequestFunc }

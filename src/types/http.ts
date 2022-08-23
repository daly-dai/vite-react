import { AxiosRequestConfig } from "axios"

export type RequestFn = (
  url: string,
  params: any,
  action?: any,
  format?: any,
  method?: string,

) => any

export interface RequestConfig {
  url: string
  params: any
  method?: string
  format?: string
  action?: any,
  config?: AxiosRequestConfig
}

export type RequestFunc = (arg0: RequestConfig) => any


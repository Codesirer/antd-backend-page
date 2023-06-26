import axios from 'axios'

import { prodBaseURL, TIMEOUT } from './config'

export function request(config) {
  //1. 创建axios实例
  const instance = axios.create({
    baseURL: prodBaseURL,
    timeout: TIMEOUT,
  })
  //2 axios拦截器

  //2.1 请求拦截
  instance.interceptors.request.use(
    (config) => {
      //拦截之后返回出去，否则请求就失败了
      config.headers.Authorization = sessionStorage.getItem('token')
      return config
    },
    (err) => {
      console.log(err)
    }
  )

  //2.2 响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )

  //3. 返回 axios 实例
  return instance(config)
}

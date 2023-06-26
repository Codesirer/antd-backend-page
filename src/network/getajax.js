import { request } from './request.js'

export function getOverview() {
  return request({
    method: 'get',
    url: '/overview',
  })
}

export function getProdTree() {
  return request({
    method: 'get',
    url: '/prodtree ',
  })
}

export function getDataFromServer(url) {
  return request({
    method: 'get',
    url: url,
  })
}

export function postLogin(params) {
  const param = new FormData()
  param.append('username', params.username)
  param.append('password', params.password)
  return request({
    method: 'post',
    url: '/login',
    data: param,
  })
}

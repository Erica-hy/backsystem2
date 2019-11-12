import request from './request.js'

export function login(){
  return request({
    url:'/login'
  })
}


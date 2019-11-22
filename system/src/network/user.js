import request from './request.js'

export function user(){
  return request({
    url:'/user'
  })
}

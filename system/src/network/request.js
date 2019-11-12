import axios from 'axios'
const request = function(config){
  const instance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
  })

  return instance(config)
}
export default request;

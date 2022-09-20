const baseURL = "https://server.xhhzs.cn/"


import axios from "axios"
let instance = axios.create({
  timeout: 10000,
  baseURL: baseURL
})

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
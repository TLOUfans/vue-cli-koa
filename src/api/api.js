'use strict'
import axios from 'axios'

let base = ''

export const register = params => {
  return axios.post(`${base}/user/register`, params).then(res => res.data)
}

export const list = params => {
  return axios.post(`${base}/user/list`, params).then(res => res.data)
}

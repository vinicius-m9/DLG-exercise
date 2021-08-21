import request from 'supertest'

import Server from '../../src/server'

const API = request(Server.create())

export const removeDuplicate = (phrase) => {
  return API.get(`/removeDuplicate/${phrase}`)
}

export const changeVowals = (body) => {
  return API.post('/changeVowals').send(body)
}

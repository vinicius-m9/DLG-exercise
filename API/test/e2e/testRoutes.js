import request from 'supertest'

import Server from '../../src/server'

// supertest setup
const API = request(Server.create())

// create removeDuplicate test route
export const removeDuplicate = (phrase) => {
  return API.get(`/removeDuplicate/${phrase}`)
}

// create changeVowals test route
export const changeVowals = (body) => {
  return API.post('/changeVowals').send(body)
}

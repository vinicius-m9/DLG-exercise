import express from 'express'

import routes from './routes'

// create express server
const create = () => {
  const server = express()
  server.use(express.json())

  return server
}

// starts express server
const start = () => {
  const PORT = process.env.PORT || 3000
  const server = create()

  routes.initialize(server)

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

export default {
  create,
  start
}

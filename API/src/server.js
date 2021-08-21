import express from 'express'

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

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

export default {
  create,
  start
}

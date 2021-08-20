import express from 'express'
import dotenv from 'dotenv'

// .env setup
dotenv.config()

const PORT = process.env.PORT || 3000

// express setup
const server = express()
server.use(express.json())

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

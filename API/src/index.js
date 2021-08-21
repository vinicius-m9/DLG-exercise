import dotenv from 'dotenv'

import Server from './server'

// .env setup
dotenv.config()

// starts API
Server.start()

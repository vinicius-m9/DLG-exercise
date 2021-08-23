import {
  emptyParamsValidator,
  jsonValidator,
  bodyContentValidator
} from './middlewares'
import {
  removeDuplicate,
  changeVowals
} from './controller'

export const initialize = server => {
  server.get('/removeDuplicate/:phrase', emptyParamsValidator, removeDuplicate)

  server.post('/changeVowals', jsonValidator, bodyContentValidator, changeVowals)
}

export default {
  initialize
}

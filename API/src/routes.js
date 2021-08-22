import {
  emptyParamsValidator,
  bodyContentValidator
} from './middlewares'
import {
  removeDuplicate,
  changeVowals
} from './controller'

export const initialize = server => {
  server.get('/removeDuplicate/:phrase', emptyParamsValidator, removeDuplicate)

  server.post('/changeVowals', bodyContentValidator, changeVowals)
}

export default {
  initialize
}

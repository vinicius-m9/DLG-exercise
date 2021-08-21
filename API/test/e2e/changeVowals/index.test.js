/* globals describe it expect */

import { changeVowals } from '../testRoutes'

describe('changeVowals route tests', () => {
  it('Should change the vowals correctly', () => {
    const { body } = changeVowals({
      phrase: 'It works',
      letter: 'c'
    })

    expect(body.result).toBe('ct wcrks')
  })

  it('Should res in an error with req.body without phrase property', () => {
    const { body } = changeVowals({
      letter: 'a'
    })

    expect(body.error).toBe('Phrase property is required.')
  })

  it('Should res in an error with req.body without letter property', () => {
    const { body } = changeVowals({
      phrase: 'request with no letter property'
    })

    expect(body.error).toBe('Letter property is required.')
  })

  it('Should res in an error with req.body empty JSON', () => {
    const { body } = changeVowals({})

    expect(body.error).toBe('Phrase and letter properties are required.')
  })

  it('Should res in an error with req.body without JSON', () => {
    const { body } = changeVowals()

    expect(body.error).toBe('JSON expected')
  })

  it('Should res in an error with incorrect letter property', () => {
    const { body } = changeVowals({
      phrase: 'Request with incorrect letter property',
      letter: 'non letter'
    })

    expect(body.error).toBe('Letter property must be a character.')
  })

  it('Should res in an error with empty letter property', () => {
    const { body } = changeVowals({
      phrase: 'Request with incorrect letter property',
      letter: ''
    })

    expect(body.error).toBe('Letter property must be a character.')
  })

  it('Should res in an error with empty phrase property', () => {
    const { body } = changeVowals({
      phrase: '',
      letter: 'h'
    })

    expect(body.error).toBe('Phrase property must be a string.')
  })
})

/* globals describe it expect */

import { changeVowals } from '../testRoutes'

describe('changeVowals route tests', () => {
  it('Should change the vowals correctly', async () => {
    const { body, status } = await changeVowals({
      phrase: 'It works',
      letter: 'c'
    })

    expect(body.result).toBe('ct wcrks')
    expect(status).toBe(200)
  })

  it('Should res in an error with req.body without phrase property', async () => {
    const { body, status } = await changeVowals({
      letter: 'a'
    })

    expect(body.error).toBe('Phrase property is required.')
    expect(status).toBe(400)
  })

  it('Should res in an error with req.body without letter property', async () => {
    const { body, status } = await changeVowals({
      phrase: 'request with no letter property'
    })

    expect(body.error).toBe('Letter property is required.')
    expect(status).toBe(400)
  })

  it('Should res in an error with req.body empty JSON', async () => {
    const { body, status } = await changeVowals({})

    expect(body.error).toBe('Phrase and letter properties are required.')
    expect(status).toBe(400)
  })

  it('Should res in an error with req.body without JSON', async () => {
    const { body, status } = await changeVowals()

    expect(body.error).toBe('JSON expected.')
    expect(status).toBe(400)
  })

  it('Should res in an error with req.body non JSON', async () => {
    const { body, status } = await changeVowals('some random text')

    expect(body.error).toBe('JSON expected.')
    expect(status).toBe(400)
  })

  it('Should res in an error with incorrect letter property', async () => {
    const { body, status } = await changeVowals({
      phrase: 'Request with incorrect letter property',
      letter: 'non letter'
    })

    expect(body.error).toBe('Letter property must be a character.')
    expect(status).toBe(400)
  })

  it('Should res in an error with empty letter property', async () => {
    const { body, status } = await changeVowals({
      phrase: 'Request with incorrect letter property',
      letter: '  '
    })

    expect(body.error).toBe('Letter property is required.')
    expect(status).toBe(400)
  })

  it('Should res in an error with empty phrase property', async () => {
    const { body, status } = await changeVowals({
      phrase: '  ',
      letter: ' a '
    })

    expect(body.error).toBe('Phrase property is required.')
    expect(status).toBe(400)
  })

  it('Should res in an error with empty phrase and letter properties', async () => {
    const { body, status } = await changeVowals({
      phrase: '  ',
      letter: '  '
    })

    expect(body.error).toBe('Phrase and letter properties are required.')
    expect(status).toBe(400)
  })
})

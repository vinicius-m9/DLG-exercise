/* globals describe it expect */

import { removeDuplicate } from '../testRoutes'

describe('removeDuplicate route tests', () => {
  it('Should remove the duplicate words correctly', async () => {
    const { body } = await removeDuplicate(
      'word Duplicate Word randomWord duplicate Duplicate Word word duplicate')

    expect(body.result).toBe('word Duplicate Word randomWord duplicate')
  })

  it('Should not remove words with a req.params without duplicates', async () => {
    const { body } = await removeDuplicate('Word randomWord duplicate word Duplicate')

    expect(body.result).toBe('Word randomWord duplicate word Duplicate')
  })

  it('Should res in an error with empty req.params', async () => {
    const { body } = await removeDuplicate('')

    expect(body.error).toBe('Phrase param is required.')
  })

  it('Should res in an error without req.params', async () => {
    const { body } = await removeDuplicate()

    expect(body.error).toBe('Phrase param is required.')
  })
})

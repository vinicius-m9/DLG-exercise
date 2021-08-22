export const removeDuplicate = (req, res) => {
  const { phrase } = req.params
  const result = phrase.trim().split(' ')
    .filter((word, index, arr) => arr.indexOf(word) === index).join(' ')

  res.json({ result })
}

export const changeVowals = (req, res) => {
  const { phrase, letter } = req.body
  const result = phrase.trim().replace(/[aeiou]/ig, letter.trim())

  res.json({ result })
}

export default {
  removeDuplicate,
  changeVowals
}

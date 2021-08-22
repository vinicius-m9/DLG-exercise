// middleware to validate the body content
const bodyContentValidator = (req, res, next) => {
  const phrase = (req.body.phrase).trim()
  const letter = (req.body.letter).trim()

  if (!phrase &&
    !letter) return res.json({ error: 'Phrase and letter properties are required.' })

  if (!phrase) return res.json({ error: 'Phrase property is required.' })

  if (!letter) return res.json({ error: 'Letter property is required.' })

  if (letter.length > 1) return res.json({ error: 'Letter property must be a character.' })

  next()
}

export default bodyContentValidator

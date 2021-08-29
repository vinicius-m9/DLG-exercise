// middleware to validate the body content
const bodyContentValidator = (req, res, next) => {
  const phrase = req.body.phrase ? (req.body.phrase).trim() : req.body.phrase
  const letter = req.body.letter ? (req.body.letter).trim() : req.body.letter

  if (!phrase &&
    !letter) return res.status(400).json({ error: 'Phrase and letter properties are required.' })

  if (!phrase) return res.status(400).json({ error: 'Phrase property is required.' })

  if (!letter) return res.status(400).json({ error: 'Letter property is required.' })

  if (letter.length > 1) return res.status(400).json({ error: 'Letter property must be a character.' })

  next()
}

export default bodyContentValidator

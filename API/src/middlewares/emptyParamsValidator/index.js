// middleware to validate if the phrase param is empty
const emptyParamsValidator = (req, res, next) => {
  if (!(req.params.phrase).trim()) return res.json({ error: 'Phrase param is required.' })

  next()
}

export default emptyParamsValidator

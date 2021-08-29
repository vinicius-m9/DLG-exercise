// middleware to validate if the body received a JSON
const jsonValidator = (req, res, next) => {
  if (req.headers['content-type'] !==
    'application/json') return res.status(400).json({ error: 'JSON expected.' })

  next()
}

export default jsonValidator

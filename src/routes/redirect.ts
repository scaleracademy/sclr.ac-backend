import { Router } from 'express'
import { getShortCodeDetails } from '../controllers/shortcode.controller'

const route = Router()

route.get('/:code', async(req, res) => {
  const shortCode = req.params.code // TODO: validate < 8 char

  const savedShortCode = await getShortCodeDetails(shortCode)
  if (!savedShortCode) {
    return res.redirect('https://scaler.com')
  }

  return res.redirect(savedShortCode.longUrl)
})

export default route

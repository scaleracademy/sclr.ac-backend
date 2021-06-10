import { Router } from 'express'
import { createSpecificShortCode } from '../controllers/shortcode.controller'

const route = Router()

route.post('/urls', async (req, res) => {
    // TODO: create a new shortcode entry and send the details back
})

route.put('/urls/:code', async (req, res) => {
    const shortCode = req.params.code
    const longUrl = req.body.url
    const savedShortCode = await createSpecificShortCode(shortCode, longUrl)

    return res.status(201).json({
        status: "success",
        data: savedShortCode
    })
})

export default route
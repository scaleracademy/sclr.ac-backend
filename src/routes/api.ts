import { Router } from 'express'
import { createSpecificShortCode, getShortCodeDetails } from '../controllers/shortcode.controller'

const route = Router()

route.get('/urls/:code', async (req, res) => {
    const shortCode = req.params.code // TODO: validate < 8 char

    const savedShortCode = await getShortCodeDetails(shortCode)
    if (!savedShortCode) {
        return res.status(404).json({
            status: 'error',
            message: 'Invalid short code. Not found in DB'
        })
    }

    return res.status(200).json({
        status: 'success',
        data: savedShortCode
    })

})

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
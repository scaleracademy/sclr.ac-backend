import { Router } from 'express'
import { createSpecificShortCode, getShortCodeDetails, createRandomShortCode } from '../controllers/shortcode.controller'

const route = Router()

route.get('/urls/:code', async (req, res) => {
    const shortCode = req.params.code 
    // validate <= 8 char
    if(shortCode.length > 8){
        return res.status(400).json({
            status: 'error',
            message: 'Invalid short Code, too long!'
        })
    }
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
    const longUrl = req.body.url

    const savedShortCode = await createRandomShortCode(longUrl)

    return res.status(201).json({ 
        status: 'success',
        data: savedShortCode
    })
})

route.put('/urls/:code', async (req, res) => {
    const shortCode = req.params.code
    const longUrl = req.body.url
    
    // if note create a specific short code and return a success(201) response
    let savedShortCode;
    
    try {
        savedShortCode = await createSpecificShortCode(shortCode, longUrl)
    } catch (err) {
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }

    return res.status(201).json({
        status: 'success',
        data: savedShortCode
    })
})

export default route

function generateRandomShortCode(longUrl: any) {
    throw new Error('Function not implemented.')
}

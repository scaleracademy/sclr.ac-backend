import express from 'express'

const app = express() 

app.get('/', (req, res) => {
    res.send("sclr.ac")
})

export default app
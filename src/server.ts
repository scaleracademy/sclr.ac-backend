import express from 'express'
import cors from 'cors'
import apiRoute from './routes/api'
import redirectRoute from './routes/redirect'

const app = express()

app.use( express.json() )
app.use( cors() )

app.use( '/api', apiRoute )
app.use( '/', redirectRoute )

export default app

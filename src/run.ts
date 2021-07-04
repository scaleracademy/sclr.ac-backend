import app from './server'
import { connect } from './db/connect'


(async function start() {

    await connect()
    const env = process.env.PORT || 3000
    app.listen(env, () => {
        console.log(`Server started on http://localhost:${env}`)
    })
    
    

})()
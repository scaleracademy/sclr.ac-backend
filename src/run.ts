import app from './server'
import { connect } from './db/connect'


(async function start() {

    await connect()
    
    app.listen(4444, () => {
        console.log('Server started on http://localhost:4444')
    })
    
    

})()
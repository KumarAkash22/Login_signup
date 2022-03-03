const app = require('.')
const connect = require('./Configs/db')
let port = 3001

app.listen(port,async()=>{
    await connect()
    console.log(`listening on port ${port}`)
})
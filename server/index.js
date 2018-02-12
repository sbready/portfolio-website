// require('dotenv').config()
const express = require('express')
    , cors = require('cors')

const app = express()
app.use( cors() )
let port = 3052
app.use( express.static( `${__dirname}/..` ) );

app.listen(port, () =>console.log(`listening on port: ${port}`))

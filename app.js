// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~project setup~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Project Name:Human Resource Management System
// Developer Name:Md Tajal Islam
// Start Date:3/12/21
// End Date:

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~App Configuration~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const envFileConfig = require('dotenv').config()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()
app.set("view engine", "ejs")

// cors setting
const whitelist = [
    'http://example1.com',
    'http://example2.com'
]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
//port
app.listen(process.env.PORT, (req, res) => {
    console.log('App Running on port:' + process.env.PORT)
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Import Routers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const user = require('./routers/users')


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Routers Root~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/", (req, res) => res.render("home"))
app.use('/api', cors(corsOptions), user)



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~project setup~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Project Name:Human Resource Management System
// Developer Name:Md Tajal Islam
// Start Date:3/12/21
// End Date:

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~App Configuration~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const express = require('express')
const bodyParser = require('body-parser')
const envFileConfig = require('dotenv').config()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()

app.listen(process.env.PORT, (req, res) => {
    console.log('App Running on port:' + process.env.PORT)
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Import Routers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const user = require('./routers/users')


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Routers Root~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.use('/api', user)



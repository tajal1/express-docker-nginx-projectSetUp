// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Router Configuration~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const express = require('express')
const router = express.Router()


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Imports~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { staticMessage } = require('../controllers/users')


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~User Routes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
router.get('/getValue', staticMessage)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Router Export~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
module.exports = router



'use strict'

const express = require('express')
const router = express.Router()
const versesController = require('../../controllers/verses.controller')
const validator = require('express-validation')
const { create } = require('../../validations/user.validation')

router.post('/', versesController.addVerses) 

router.get('/', versesController.getVerses) 


module.exports = router

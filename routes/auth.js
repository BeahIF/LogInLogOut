const express = require('express');
const router= express.Router();
const auth = require('../middleware/auth')
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const authController = require('../controllers/authController')

//@route GET api/auth
//@access Public


router.get('/', authController.getAuth)

//@route POST api/auth
//@access Public
router.post("/",authController.login)

module.exports = router;
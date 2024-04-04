const express = require('express');
const router = express.Router()
const signup=require('../controllers/Admin/signUp')
const login=require('../controllers/Admin/login')

router.post('/signup',signup)
router.post('/login',login)

module.exports=router
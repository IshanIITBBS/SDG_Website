const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/auth')


router.post('/postsignup',authcontroller.postsignup)

router.post('/login',authcontroller.postlogin) ;

router.post('/logout',authcontroller.postlogout) ;

router.get('/logincheck',authcontroller.logincheck) ;

router.get('/admincheck',authcontroller.admincheck) ;

module.exports = router ;
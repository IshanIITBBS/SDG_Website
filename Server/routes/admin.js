const express = require('express');
const router = express.Router();
const admincontroller = require('../controllers/admin.js') ;
const logincheck = require('../middlewares/check.js').logincheck ;
const admincheck = require('../middlewares/check.js').admincheck ;

router.get('/noticeform',logincheck,admincheck,admincontroller.getnoticeform) ;

router.post('/postnotice',logincheck,admincheck,admincontroller.postnotice) ;

router.post('/postmission',logincheck,admincheck,admincontroller.postmission) ;

router.post('/postquiz',logincheck,admincheck,admincontroller.postquiz) ;

module.exports = router ;




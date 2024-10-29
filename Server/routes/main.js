const express = require('express');
const rootdir = require('../util/path.js') ;
const router = express.Router();
const controller1 = require('../controllers/controller1.js') ;

router.get('/',controller1.main_intro) ;

module.exports = router ;
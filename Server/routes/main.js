const express = require('express');
const path = require('path') ;
const rootdir = path.dirname(require.main.filename) ;
const router = express.Router();
const controller1 = require('../controllers/controller1.js') ;

router.get('/',controller1.main_intro) ;

module.exports = router ;
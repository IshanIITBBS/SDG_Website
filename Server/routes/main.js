const express = require('express');
const rootdir = require('../util/path.js') ;
const router = express.Router();
const controller1 = require('../controllers/controller1.js') ;

router.get('/',controller1.main_intro) ;

router.get('/noticeboard',controller1.getnotices);

router.get('/missionboard',controller1.getMissions) ;

router.get('/missionboard/:missionId',controller1.getMissionDetail) ;

router.get('/quiz',controller1.getquiz) ;

module.exports = router ;




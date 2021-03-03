const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controller/skillsCtrl');

/* GET index page. */
router.get('/', skillsCtrl.getIndex);


router.get('/skills/:id', skillsCtrl.getShow);


router.get('/add-album', skillsCtrl.getAddSkill);


router.post('/add-album', skillsCtrl.postAddSkill);


router.post('/skills/:id', skillsCtrl.postDelSkill);


router.get('/skills/edit-skill/:id', skillsCtrl.getEditSkill);


router.post('/skills/edit-skill/:id', skillsCtrl.postUpdatedSkill);


module.exports = router;

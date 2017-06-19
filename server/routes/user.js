'use strict';

const user = require('../controllers/user.js');
const router = require('koa-router')();

router.post('/register', user.addUser);
router.post('/list', user.list);

module.exports = router;
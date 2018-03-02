var express = require('express');
var router = express.Router();
var login =require("./../controllers/login")
// 定义网站主页的路由
router.post('/login',login.login);
router.post('/userlist',login.userlist);

//验证token和sign

module.exports = router;
var http = require('http');
var path = require('path');

var express = require('express');


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/evanDemo');
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open',()=>{
    console.log("数据库evanDemo链接成功")
})

//body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析
var bodyParser = require('body-parser');

var app = express();

//设置端口
app.set('port', 3000);

//设置上传格式以及上传文件大小
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // res.header("Access-Control-Max-Age", "1728000");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});



//导入路由
//var routes = require('./routes/home');
var routerManagement = require('./routes/management');
//app.use('/home', routes);
app.use('/management', routerManagement);



var server = http.createServer(app);
server.listen(app.get('port'));

server.on('listening', function() {
    console.log('----------listening on port: ' + app.get('port') + '----------');
});

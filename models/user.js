var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//用户表
var userSchema = new Schema({
    id: {
        type: Number,
        default: 0
    },
    username: String,
    //locationId: Schema.Types.ObjectId,
    password: { //密码
        type: String
    },
    token: { //token
        type: String,
        //required: true
    },
    email: {
        type: String
    },
    mobile: {
        type: String,
        //required: true
    } //手机号码,
}, {
    versionKey: false  //设置版本号为false，默认为true
});

module.exports = mongoose.model('user', userSchema);
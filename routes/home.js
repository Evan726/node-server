var express = require('express');
var router = express.Router();

var userModel = require('./../models/user');
var counterModel = require('./../models/user');


// var CounterSchema = Schema({
//     _id: {type: String, required: true},
//     seq: { type: Number, default: 0 }
// });
// var counter = mongoose.model('counter', CounterSchema);
//
//
//
// var entitySchema = mongoose.Schema({
//     testvalue: {type: String}
// });
//
// entitySchema.pre('save', function(next) {
//     var doc = this;
//     counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter) {
//         if(error)
//             return next(error);
//         doc.testvalue = counter.seq;
//         next();
//     });
// });

// 定义网站主页的路由
router.get('/', function(req, res) {
    // function getNextSequence(name) {
    //     userModel.findOneAndUpdate(
    //         {
    //             query: { _id: name },
    //             update: { $inc: { id: 1 } },
    //             new: true
    //         },
    //         function(err, result) {
    //             console.log('1===>',result.id)
    //             return result.id
    //         }
    //     );
    // }
    // getNextSequence('id')
    userModel.findOne({
        username: 'zhangsan'
    }, function(err, result) {
        if(!err){
            if (result) {
                const data = {
                    userId: result._id,
                    id: result.id
                };
                res.send({
                    code: "0000",
                    message: 'ok',
                    result: data
                });

            }else{
                res.send({
                    code: "6001",
                    message: '数据保存错误',
                })
            }
        }else{
            res.send({
                code: "6001",
                message: '数据保存错误',
            })
        }
    });
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
    res.send('关于我们');
});

//验证token和sign

module.exports = router;
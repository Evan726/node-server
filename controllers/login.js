var userModel = require('./../models/user');
module.exports = (function(){
    return {
        login: function (req, res) {
            userModel.findOne({
                username: req.body.username
            }, function (err, result) {
                if (!err) {
                    if (result) {
                        const data = {
                            userId: result._id,
                            id: result.id,
                            username: result.username
                        };
                        return res.send({
                            code: "0000",
                            message: 'ok',
                            result: data
                        });
                    } else {
                        return res.send({
                            code: "6001",
                            message: '该用户不存在',
                        })
                    }
                } else {
                    return res.send({
                        code: "6004",
                        message: '查询失败',
                    })
                }
            })
        },
        userlist: function (req, res) {
            userModel.find({}, function (err, result) {
                if (!err) {
                    return res.send({
                        code: "0000",
                        message: 'ok',
                        result: result
                    });
                } else {
                    return res.send({
                        code: "6001",
                        message: '查询失败',
                    })
                }
            })
        }
    }
})();
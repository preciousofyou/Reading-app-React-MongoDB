var User = require('./UserModel.js');

module.exports = function (app) {
    app.post('/insertUser',function(req,res,next){
        // var obj = req.getParameter();
        //解析body不是nodejs默认提供的，你需要载入body-parser中间件才可以使用req.body
        var obj = {
            username: req.body.username,
            password: req.body.password,
            shelf: []
        }
        User.insertUser(obj,function(){
            // res.send(result);
            res.end('1');
        })
    })
    app.post('/getUser',function(req,res,next){
        // var obj = req.getParameter();
        //解析body不是nodejs默认提供的，你需要载入body-parser中间件才可以使用req.body
        var obj = {
            username: req.body.username,
            password: req.body.password
        } 
        User.getUser(obj,function(result){
            res.end(result);
        })
    })
    app.post('/updateUser',function(req,res,next){
        var obj = {
            username: req.body.username,
            newpass: req.body.newpass
        }
        User.updateUser(obj,function(result){
            res.end(result);
        })
    })

    app.post('/addBookToShelf',function(req,res,next){
        var obj = JSON.parse(req.body.obj)
        User.addBookToShelf(obj,function(result){
            res.end(result);
        })
    })
}
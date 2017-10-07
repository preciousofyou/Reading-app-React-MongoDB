var Book = require('./BookModel.js')

module.exports = function (app) {
    app.get('/getBookData', function(req,res,next){
        var obj = {};
        Book.getBookData(obj, function(result){
            res.end(JSON.stringify(result));
        }); 
    })
    app.post('/addComment',function(req,res,next){
        var obj = JSON.parse(req.body.obj);
        Book.addComment(obj,function(result){
            res.end(result);
        })
    })
}

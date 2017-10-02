MongoClient = require('mongodb').MongoClient;
DB_STR = 'mongodb://localhost:27017/read-data';

var Book = {
    getBookData: function(obj,callback){
        MongoClient.connect(DB_STR, function(err,db){
            if(err){console.log(err);return;}
            var collection = db.collection('books');
            collection.find().toArray(function(err,result){
                if(!err){
                    db.close();
                    callback(result);
                }
            })
        })
    }
}

module.exports = Book;
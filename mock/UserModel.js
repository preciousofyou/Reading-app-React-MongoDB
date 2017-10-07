MongoClient = require('mongodb').MongoClient;
DB_STR = 'mongodb://localhost:27017/read-data';

var User = {
    insertUser: function(obj,callback){
        MongoClient.connect(DB_STR, function(err,db){
            if(err){console.log(err);return;}
            var collection = db.collection('user');
            collection.insert(obj,function(err,result){
                if(!err){
                    db.close();
                    callback();
                }
            })
        })
    },
    getUser: function(obj,callback){
        MongoClient.connect(DB_STR, function(err,db){
            if(err){console.log(err);return;}
            var collection = db.collection('user');
            collection.find({'username': obj.username,'password':obj.password}).toArray(function(err,result){
                if(!err){
                    if(result.length!==0){
                        db.close();
                        callback(JSON.stringify(result));
                    }else{
                        db.close();
                        callback('0');
                    }
                }
            })
        })
    },
    updateUser: function(obj,callback){
        MongoClient.connect(DB_STR, function(err,db){
            if(err){console.log(err);return;}
            var collection = db.collection('user');
            collection.update({'username':obj.username},{$set:{'password':obj.newpass}},function(err,result){
                if(!err){
                    if(result.length!==0){
                        db.close();
                        callback('1');
                    }else{
                        db.close();
                        callback('0');
                    }
                }
            })
        })
    },
    addBookToShelf: function(obj,callback){
        MongoClient.connect(DB_STR,function(err,db){
            if(err){console.log(err);return;}
            var collection = db.collection('user');
            collection.update({'username':obj.username},{$set:{'shelf':obj.shelf}},function(err,result){
                if(!err){
                    if(result.length!==0){
                        db.close();
                        callback(JSON.stringify(result));
                    }else{
                        db.close();
                        callback('');
                    }
                }
            })
        })
    }
}


module.exports = User;

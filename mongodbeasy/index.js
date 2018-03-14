var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017/School";

MongoClient.connect(DB_URL, function(error, db){
    console.log('连接成功!');
    //dosoming....
    // insertData(db);
});
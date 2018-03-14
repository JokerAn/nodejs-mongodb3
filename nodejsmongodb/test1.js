/*
locate mongodb 查看安装路径
 pgrep mongo -l (查看mongodb数据库是否启动)
db.student.find()  #查询所有记录。相当于：select * from student
db.student.find({sname: 'lisi'})  #查询sname='lisi'的记录。相当于： select * from student where sname='lisi'
db.student.find({},{sname:1, sage:1}) #查询指定列sname、sage数据。相当于：select sname,sage from student。
        sname:1表示返回sname列，默认_id字段也是返回的，可以添加_id:0（意为不返回_id）写成{sname: 1, sage: 1,_id:0}，就不会返回默认的_id字段了
db.student.find({sname: 'zhangsan', sage: 22}) #and 与条件查询。相当于：select * from student where sname = 'zhangsan' and sage = 22
db.student.find({$or: [{sage: 22}, {sage: 25}]}) #or 条件查询。相当于：select * from student where sage = 22 or sage = 25

* */

var MongoClient=require('mongodb').MongoClient;
var DB_CONN_STR='Mongdb://localhost:27017:School';
var insertData=function (db,callback) {
    var collection=db.collection('user2');
    collection.insert(data,function(err,result){
        if(err){
            console.log(err);
            return
        }
        callback(result);
    })
}
MongoClient.connect(DB_CONN_STR,function (err,db) {
    if(err){
        console.log('ERROR '+err)
    }
    inserData(db,function (result) {
        console.log(result);
        db.console()
    })
})
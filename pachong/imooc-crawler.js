//最基本的爬虫
var http=require('http');
var url='http://www.jokeran.com';
http.get(url,function (res) {
    var html='';
    res.on('data',function (data) {
        html+=data;
    })
    res.on('end',function(){
        console.log(html);
    })
}).on('error',function (err) {
    console.log('爬虫出错');
})
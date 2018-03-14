//最基本的爬虫更改1

var http = require('http');
var url = 'http://www.imooc.com/learn/796';
var cheerio = require('cheerio');
function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $('.chapter strong .chapter-content').eq(0).html();
    console.log(chapters);

}
setInterval(function(){
    http.get(url,function (res) {
        var html='';
        res.on('data',function (data) {
            html+=data;
        })
        res.on('end',function(){
            filterChapters(html);
            // printCourseInfo(courseData)

        })
    }).on('error',function (err) {
        console.log('爬虫出错');
    })
},3000)

// http.get(url,function (res) {
//     var html='';
//     res.on('data',function (data) {
//         html+=data;
//     })
//     res.on('end',function(){
//         filterChapters(html);
//         // printCourseInfo(courseData)
//
//     })
// }).on('error',function (err) {
//     console.log('爬虫出错');
// })
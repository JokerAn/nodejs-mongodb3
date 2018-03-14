// var a = url.parse('http://example.com:8080/one?a=index&t=article&m=default');
// console.log(a);
//输出结果：
// {
//     protocol : 'http' ,
//         auth : null ,
//     host : 'example.com:8080' ,
//     port : '8080' ,
//     hostname : 'example.com' ,
//     hash : null ,
//     search : '?a=index&t=article&m=default',
//     query : 'a=index&t=article&m=default',
//     pathname : '/one',
//     path : '/one?a=index&t=article&m=default',
//     href : 'http://example.com:8080/one?a=index&t=article&m=default'
// }


var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(pathname);//打印一句话而已

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("服务起来了：127.0.0.1:8888");
}

exports.start = start;
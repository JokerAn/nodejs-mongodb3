const a='node --inspect xxx.js';
const http=require('http');
const PORT=7000;
http.createServer((request,response)=>{

    let string=JSON.stringify(require('./test.json'));

    response.write(string);//向客户端(前端)返回信息
    response.write('123456');//向客户端(前端)返回信息
    response.write('aaaaa');
    response.write('bbbbb');
    // response.end('ok!');
    response.end();//响应结束
}).listen(PORT,()=>{
    console.log('7000端口已经可以访问了')
})
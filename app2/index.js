const aa='我是入口文件！';
const a='node --inspect xxx.js';
const http=require('http');
const PORT=7000;
const App=require('./app/index');
const server=new App();
http.createServer(server.initServer()).listen(PORT,()=>{
    console.log('7000端口已经可以访问了')
});



///////////////一下是app/index.js的讲解不是本页面的内容////////
class App {
    constructor(){
        //.....
    }
    initServer(request,response){
        fs.readFile('../app3/index.html','utf8',(error,data)=>{
            // response.end(data);//响应结束
            response.end(JSON.stringify(_test));//响应结束
        })
    }
}

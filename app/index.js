const aa='我是入口文件！';
const a='node --inspect xxx.js';
const http=require('http');
const PORT=7000;
const App=require('./app/index');
http.createServer(App).listen(PORT,()=>{
    console.log('7000端口已经可以访问了')
})
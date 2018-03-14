//我是核心逻辑
const fs=require('fs');
class App {
    constructor(){
        //.....
    }
    initServer(){
        //初始化工作
        //.....
        var _test=require('../../002/test.json');

        //最后进入这个
        return(request,response)=>{
            fs.readFile('../app3/index.html','utf8',(error,data)=>{
                // response.end(data);//响应结束
                response.end(JSON.stringify(_test));//响应结束
            })
        }
    }
}
/*等同于这个
* 　var App=function(){};
    App.prototype.initServer=function(request,response){
        response.end('7');//响应结束
    }
* */

module.exports=App;
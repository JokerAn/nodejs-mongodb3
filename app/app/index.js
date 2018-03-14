//我是核心逻辑

module.exports=(request,response)=>{

    response.write('123456');//向客户端(前端)返回信息
    response.write('app1');
    // response.end('ok!');
    response.end();//响应结束
}



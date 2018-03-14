/*
    //阻塞式　获取不到ｉnput.txt剩下的都不会执行
    var fs = require("fs");

    var data = fs.readFileSync('input.txt');

    console.log(data.toString());
    console.log("程序执行结束!");
*/

// /*
    //非阻塞式　
    var fs = require("fs");

   fs.readFile('input22.txt',
       function (err,data) {//就是callback
           if(err){
               return console.error(err)
           }
           console.log(data.toString());
        }
   );

    console.log("程序执行结束!");
// */
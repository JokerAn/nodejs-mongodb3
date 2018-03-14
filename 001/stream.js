/*
    //读取流
    var fs=require('fs');
    var data='';
    var readerStream=fs.createReadStream('input.txt');
    readerStream.setEncoding('utf-8');
    readerStream.on('data',function (chunk) {
       data+=chunk;
       console.log(0);
    });
    readerStream.on('end',function(){
        console.log(data);
        console.log(1);
    });

    readerStream.on('error', function(err){
        console.log(err.stack);
        console.log(2);
    });

    console.log("程序执行完毕");
 */
/*
    //写流
    var fs = require("fs");
    var data = '菜鸟教程官网地址：www.runoob.com';

    // 创建一个可以写入的流，写入到文件 input1.txt 中
    //如果input1存在就将里面内容全部覆盖
    //如果不存在就自动新input1.txt建文本
    var writerStream = fs.createWriteStream('input1.txt');

    // 使用 utf8 编码写入数据
    writerStream.write(data,'UTF8');

    // 标记文件末尾
    writerStream.end();

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });

    writerStream.on('error', function(err){
        console.log(err.stack);
    });

    console.log("程序执行完毕");
*/
/**/
/**/
/**/
/*
    //从一个流里面读取数据放到另一个流里面

    var fs = require("fs");

    // 创建一个可读流
    var readerStream = fs.createReadStream('input.txt');

    // 创建一个可写流
    var writerStream = fs.createWriteStream('input1.txt');

    // 管道读写操作
    // 读取 input.txt 文件内容，并将内容写入到 input1.txt 文件中　ｉinput1旧内容被覆盖
    readerStream.pipe(writerStream);

    console.log("程序执行完毕");
*/
/*
    //压缩文件
    var fs = require("fs");
    var zlib = require('zlib');

    // 压缩 input.txt 文件为 input.txt.gz
    fs.createReadStream('input.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('input.txt.gz'));

    console.log("文件压缩完成。");
*/

/*
    //解压文件

    var fs = require("fs");
    var zlib = require('zlib');

    // 解压 input.txt.gz 文件为 input.txt
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input.txt'));

    console.log("文件解压完成。");
*/
    //上边全部覆盖了原文件中的内容　这个不覆盖

    let fs = require('fs');


//读取流//创建可读流 input
var inputdata='';
var input1data='';


//创建可读流input1
    let readStream1 = fs.createReadStream("input1.txt");
    //设置utf-8编码
    readStream1.setEncoding('UTF8');
    //处理流事件
    readStream1.on('data',function(chunk){
        input1data=chunk;
        console.log('input1data--'+input1data);
    });
    readStream1.on('end', (res) => {
        console.log('endendendendend');
    });
    readStream1.on("error", err => console.log(err.strck));



//读取流//创建可读流 input
    let readStream = fs.createReadStream("input.txt");
    //设置utf-8编码
    readStream.setEncoding('UTF8');
    //处理流事件
    readStream.on('data', chunk => {
        inputdata=chunk;
        console.log('inputdata--'+inputdata);
    });
    readStream.on('end', () =>{ writeS(input1data)});
    readStream.on("error", err => console.log(err.strck));
    console.log("程序1执行完毕");



    let writeS = dataS =>{
        let writeStream = fs.createWriteStream("input1.txt");
        //使用utf-8写入流
        writeStream.write(inputdata+dataS, "UTF8");
        //标记文件末尾
        writeStream.end();
        //处理事件流
        writeStream.on("finish", () => console.log("写入完成"));
        writeStream.on("error", err => console.log(err.stack));
        console.log("程序2执行完毕");
    }




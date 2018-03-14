const buf=Buffer.from('哇哈哈哈','ascii');//ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的
console.log(buf.toString('hex'));//hex - 将每个字节编码为两个十六进制字符。
console.log(buf.toString('base64'));//base64 - Base64 编码。
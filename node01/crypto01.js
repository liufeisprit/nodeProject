'use strict'
const crypto=require('crypto');
const hash=crypto.createHash('md5');
const hmac = crypto.createHmac('sha256', 'bbb');
hash.update('hello world')
hash.update('hello world2')
hmac.update('hello world')
hmac.update('hello world2')
console.log(hash.digest('hex'))
console.log(hmac.digest('hex'))//密钥变了 签名也会变

//AES加密算法



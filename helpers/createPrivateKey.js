const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex');

console.log(secret);//96938040c389dd3025ac341ec27127ee9f9e218f2f3971c753520bad7a29a74b
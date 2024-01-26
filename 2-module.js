const path = require('path')

console.log(path.sep)

const filepath = path.join('/hello/','world','print.txt')

console.log(filepath);

const base = path.basename(filepath)

console.log(base);

const abs = path.resolve(__dirname,'hello','world','print.txt')
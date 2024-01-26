// const { readFileSync, writeFileSync } = require('fs')

// const first = readFileSync('./hello/world/display.txt','utf8')
// const second = readFileSync('./hello/world/print.txt','utf8')

// writeFileSync('./hello/world/result.txt',`it is result output`)

const fs = require('fs')
const read1 = fs.readFileSync('./hello/world/display.txt','utf-8')
const read2 = fs.readFileSync('./hello/world/print.txt','utf-8')

fs.writeFileSync("./hello/world/new.txt",`Your new file is created and add text from file 1 and file 2 ${read1} ${read2}`)
const os = require('os')
const user = os.userInfo()
console.log(user);
console.log(`the system uptime is ${os.uptime} seconds`);

const obj = {
    name:os.type(),
    release:os.release(),
    freemem:os.freemem(),
    totalmem:os.totalmem(),
}
console.log(obj);


//os userinfo
//uptime
//type
//release
//totmem
//freemem
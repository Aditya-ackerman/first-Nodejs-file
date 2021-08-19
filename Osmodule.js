
const os = require('os')
// info about user

const user= os.userInfo()
console.log(user)

// system uptime in seconds
console.log(`the system is running  from ${os.uptime()} seconds`)

// more info

const info =
{
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemam : os.freemem
}

console.log(info)
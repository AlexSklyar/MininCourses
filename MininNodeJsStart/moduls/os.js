const os = require('os')

console.log('Platform: ', os.platform())
console.log('Processor architecture: ', os.arch())
console.log('Processor info: ', os.cpus())
console.log('Free memory:  ', os.freemem())
console.log('Total memory: ', os.totalmem())
console.log('Home directory: ', os.homedir())
console.log('Up time system: ', os.uptime())
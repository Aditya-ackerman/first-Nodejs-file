const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./contant/first.txt','utf8');
const second = readFileSync('./contant/second.txt','utf8');

console.log(first, second)

writeFileSync( './contant/third.txt', 'hello' +second+' ', {flag: 'a'})

  
// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')
// native module
const path = require('path')

console.log(path.basename(__dirname))

//my module
const myModule = require('./exports')
console.log(myModule)

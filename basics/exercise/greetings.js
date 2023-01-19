let getFlagsValue = require('./getFlags')

console.log(`Olá, ${getFlagsValue('--name')}! ${getFlagsValue('--greeting')}`)

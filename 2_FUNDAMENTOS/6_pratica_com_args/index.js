
//externo
const minimist = require ("minimist")


//interno
const soma = require ('./soma').soma

 const args = minimist(process.argv.slice(2))


const a = perseInt(args ['a'])
const b = perseInt(args ['b'])

soma(a, b)
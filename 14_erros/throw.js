const { errorMonitor } = require("events")

const x = "10"

//checar se x e um numero

if(!Number.isInteger(x)) {
    throw new Error(' valor de x não é um numero inteiro!')
}

console.log('continuando o código...')
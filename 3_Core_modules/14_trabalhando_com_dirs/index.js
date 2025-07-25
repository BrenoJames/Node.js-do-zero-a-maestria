const fs = require("fs")

if (!fs.existsSync('/minhapasta')) {
    console.log ("não existe!")
    fs.mkdir('minhapasta')
}

if (fs.existsSync("./minhapasta")) {
console.log('Existe!')
}

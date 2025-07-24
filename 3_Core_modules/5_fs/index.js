const http = require ("http")
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
fstat.readfile('mensagem.html',function(err ,data) {
    resolveSoa.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
})
})

server.listen(port , () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
const fs = require("fs")

fs.stat('pasta', (err, start) => {
if (err) {
    console.log(err)
   return
}

console.log(start.isFile ())
console.log(start.isDirectory ())
console.log(start.isSymbolicLink ())
console.log(start.ctime)
console.log(start.size)


})
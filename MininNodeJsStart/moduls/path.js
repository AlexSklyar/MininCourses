const path = require('path')

console.log('Назване файла: ', path.basename(__filename))
console.log("Имя директории: ", path.dirname(__dirname))
console.log("Расширение файла: ", path.extname(__filename))
console.log("parse: ", path.parse(__filename).name, path.parse(__filename).dir)
console.log(path.join(__dirname, 'server', 'index.html'))
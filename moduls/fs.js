const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test' ), (err)=> {
// if(err){
//     throw err
// }
// console.log("Dir created!")
// })


const filePath = path.join(__dirname, "test", "text.txt")

fs.writeFile(filePath, "Hello NodeJs!", err=> {
    if(err) {
        throw err
    }

    console.log('File was created!')
})
fs.writeFile(filePath, "Hello NodeJs!2", err=> {
    if(err) {
        throw err
    }

    console.log('File was created!')
})
fs.appendFile(filePath, "\nHello NodeJs!2", err=> {
    if(err) {
        throw err
    }

    console.log('File was created!')
})
fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err){
        throw err;
    }
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
    console.log('Content: ', content)
})

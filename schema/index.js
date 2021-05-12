const fs = require("fs")
const path = require("path")

let typeDefs = []
const files = fs.readdirSync(__dirname, (err, files) => {
  return files
})
files.forEach((file) => {
    if(file != 'index.js'){
        typeDefs.push(fs.readFileSync(path.join(__dirname, file), "utf8"))
        // console.log(types.join())
    }
})

module.exports = typeDefs.join()

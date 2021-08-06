const fs = require('fs')

module.exports= (cmd)=>{
if(cmd.substring(0,3) === 'cat'){
    let fileName = cmd.slice(4);
    let filePath = process.cwd()+fileName
fs.readFile(filePath,(err, fileContent)=>
console.log(fileContent.toString()))

}

}
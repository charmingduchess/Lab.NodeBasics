
const pwd = require("./pwd");

const list = require("./ls")

const cat = require('./cat');


process.stdout.write('prompt > ');

process.stdin.on('data', (data)=>{
    const cmd = data.toString().trim();
    process.stdout.write('you typed: '+cmd + '\n')
    pwd(cmd);
    list(cmd);
    cat(cmd);
})




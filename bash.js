
const pwd = require("./pwd");

const list = require("./ls")

process.stdout.write('prompt > ');

process.stdin.on('data', (data)=>{
    const cmd = data.toString().trim();
    process.stdout.write('you typed: '+cmd + '\n')
    pwd(cmd);
    console.log(list)
    list(cmd);
})




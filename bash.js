const fs = require('fs')

process.stdout.write('prompt > ');

process.stdin.on('data', (data)=>{
    const cmd = data.toString().trim();
    process.stdout.write('you typed: '+cmd + '\n');
    if(cmd === 'pwd'){
console.log(process.cwd());
    }
    process.stdout.write('\nprompt > ');
})
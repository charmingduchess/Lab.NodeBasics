
module.exports = pwd;

function pwd (cmd) {
  if(cmd === 'pwd'){
    console.log(process.cwd());
      }
    process.stdout.write('\nprompt > ');
}


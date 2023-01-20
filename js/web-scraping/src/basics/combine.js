const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { spawn } = require('child_process')
const path = require('path')

const fileName = argv.file || argv.f
if (fileName) {
  const ls = spawn("node", [path.join(__dirname, fileName)])

  ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
  });

  ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
  });

  ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
  });
}
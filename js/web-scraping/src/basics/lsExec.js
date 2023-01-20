const chalk = require('chalk')
const { exec } = require('child_process')

exec("ls -la", (error, stdout, stderr) => {
    if (error) return console.log(`error: ${error.message}`)
    if (stderr) return console.log(`stderr: ${stderr}`)
    console.log(chalk.white.bgMagentaBright(`stdout: ${stdout}`))
})
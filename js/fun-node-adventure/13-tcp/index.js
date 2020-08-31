const net = require('net')

let count = 0
let users = []
const server = net.createServer(function(conn) {
    conn.write(`
        Welcome to Node Chat\n
        ${count} are connected at the same time \n
        Please write your name and press enter \n
    `)
    count++

    let nickname;
    conn.on('data', (data) => {
        data = data.replace('\r\n', '')
        if (!nickname) {
            if (users[data]) return conn.write(`Nickname already in use, try again`)
            else {
                nickname = data
                users[nickname] = conn
                for (let user in users) users[user].write(`${nickname} joined the room \n`)
            }
        } else {
            for (let user in users) if (user != nickname) users[user].write(`${nickname}: ${data} \n`)
        }
    })

    conn.on('close', function(){
        count--
        delete users[nickname]
    })

    conn.setEncoding('utf-8')
})

server.listen(3000, function() {
    console.log('Server is listening on 3000')
})
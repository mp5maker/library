const EventEmitter = require('events').EventEmitter
const a = new EventEmitter

a.on('laugh', (data) => {
    console.log("data", data)
})

a.emit('laugh', { poop: 'yes' })
a.emit('laugh', { poop: 'yes' })

a.once('meow', () => console.log('not a cat bro'))
a.emit('meow')
a.emit('meow')
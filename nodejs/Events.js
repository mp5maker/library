var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
    console.log('I screamed out loud');
})

eventEmitter.emit('scream');


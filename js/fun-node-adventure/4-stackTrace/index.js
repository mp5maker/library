function c () {
    b()
}

function b() {
    a()
}

function a() {
    /* Alternative One */
    // throw new Error('here')

    /* Alternative Two [timeout wont work in try catch] */
    try {
        setTimeout(function() {
            throw new Error('here')
        }, 10 )
    } catch(error) {
        console.log(`Error bro`)
    }
}

c()
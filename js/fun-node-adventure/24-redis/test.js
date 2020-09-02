const User = require('./models')

const testUsers = {
    'mark@facebook.com': { name: 'Mark Zuckerberg' },
    'bill@microsoft.com': { name: 'Bill Gates'},
    'jeff@amazon.com': { name: 'Jeff Bezos'},
    'fred@fedex.com': { name: 'Fred Smith'},
}

const create = (users, fn) => {
    let total = Object.keys(users).length
    for (var user in users) {
        (function (email, data) {
            const user = new User(email, data)
            user.save(function(error) {
                if (error) throw error;
                --total || fn()
            })
        })(user, users[user]);
    }
}


create(testUsers, () => {
    console.log('all users created')
    process.exit()
})
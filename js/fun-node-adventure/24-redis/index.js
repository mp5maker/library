const redis = require('redis')
const client = redis.createClient();

function User(id, data) {
    this.id = id;
    this.data = data;
}

User.prototype.save = () => new Promise((resolve, reject) => {
    if (!this.id) this.id = String(Math.random()).substr(3)
    client.hmset(`user:${this.id}:data`, this.data)
    resolve()
})

User.find = (id) => new Promise((resolve, reject) => {
    client.hgetall(`user:${id}:data`, function(error, obj) {
        if (error) reject(error)
        resolve(new User(id, obj))
    })
})

User.prototype.follow = (user_id) => new Promise((resolve, _reject) => {
    client.multi()
        .sadd(`user:${user_id}:followers`, this.id)
        .sadd(`user:${this.id}:follows`, user_id)
        .exec(() => resolve())
})

User.prototype.unfollow = (user_id) => new Promise((resolve, _reject) => {
    client.multi()
        .srem(`user:${user_id}:followers`, this.id)
        .srem(`user:${this.id}:follows`, user_id)
        .exec(resolve())
})

User.prototype.getFollowers = () => new Promise((resolve, _reject) => {
    client.smembers(`user:${this.id}:followers`, () => resolve())
})

User.prototype.getFollows = () => new Promise((resolve, _reject) => {
    client.smembers(`user:${this.id}:follows`, () => resolve())
})

User.prototype.getFriends = () => new Promise((resolve, _reject) => {
    client.sinter(`user:${this.id}:follows`, `user:${this.id}:followers`, () => resolve())
})
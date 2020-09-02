const redis = require('redis')
const client = redis.createClient();

function User(id, data) {
    this.id = id;
    this.data = data;
}

User.prototype.save = function(fn) {
    if (!this.id) this.id = String(Math.random()).substr(3)
    client.hmset(`user:${this.id}:data`, this.data, fn)
}

User.find = function(id, fn) {
    client.hgetall(`user:${id}:data`, function (error, obj) {
        if (error) reject(error)
        fn(null, new User(id, obj))
    })
}

User.prototype.follow = function(user_id, fn) {
    client.multi()
        .sadd(`user:${user_id}:followers`, this.id)
        .sadd(`user:${this.id}:follows`, user_id)
        .exec(fn)
}

User.prototype.unfollow = function(user_id, fn) {
    client.multi()
        .srem(`user:${user_id}:followers`, this.id)
        .srem(`user:${this.id}:follows`, user_id)
        .exec(fn)
}

User.prototype.getFollowers = function(fn) {
    client.smembers(`user:${this.id}:followers`, fn)
}

User.prototype.getFollows = function() {
    client.smembers(`user:${this.id}:follows`, fn)
}

User.prototype.getFriends = function() {
    client.sinter(`user:${this.id}:follows`, `user:${this.id}:followers`, fn)
}

module.exports = User
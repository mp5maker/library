### REDIS ###
SET online.users 0
INCR online.user


HSET profile.1 name Photon
(equivalent to) profile.1 = Photon
HGETALL profile.1
HDEL profile.1 name


KEYS *
SET my.key test
GET my.key

RPUSH profile.2.jobs 'job 1'
RPUSH profile.2.jobs 'job 2'
LRANGE profile.1.jobs 0 -1


SADD myset 'a member'
SMEMBERS myset
SREM myset 'a member'
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://api.music-db.dev"',
  API_CLIENT_ID: '"2"',
  API_CLIENT_SECRET: '"B9So98otiJvZd2Kg9ryrqsfGp2bpAa89nvCODg7Q"',
  BROADCAST_AUTH_ENDPOINT: '"http://api.music-db.dev/broadcasting/auth"',
  PUSHER_KEY: '"9e5d5e948a1a6c96f3c2"',
  PUSHER_CLUSTER: '"eu"',
})

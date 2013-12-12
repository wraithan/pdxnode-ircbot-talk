var irc = require('irc')

var client = new irc.Client('irc.freenode.net', 'WraithBot', {
    channels: ['#pdxbots']
})

// Logging to console
client.addListener('message', function(from, to, message) {
    console.log(from + ' said ' + message + ' to ' + to)
})

// Reply to ping
client.addListener('message', function(from, to, message) {
    console.log(from + ' said ' + message + ' to ' + to)
    if (/^ping$/.test(message)) {
        client.say(to, 'pong')
    }
})

// Shout at people
client.addListener('message', function(from, to, message) {
    console.log(from + ' said ' + message + ' to ' + to)
    var result = /^!shout (.*)$/.exec(message)
    if (result) {
        client.say(to, result[1].toUpperCase())
    }
})

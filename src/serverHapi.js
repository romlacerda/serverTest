'use strict'

const Hapi = require('hapi')

const server = Hapi.server({
    host: '0.0.0.0',
    port: 80
})

server.route({
    method: 'GET',
    path:'/hello',
    handler: function(request, h) {
        return 'Hello World'
    }
})

async function start() {
    try {
        await server.start()
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
    console.log('Server running at: ', server.info.uri)

}

start()
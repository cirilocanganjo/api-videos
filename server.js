import {fastify} from 'fastify'
import { DatabaseMemory } from './database.js'

const server = fastify()
const database = new DatabaseMemory()
server.post('/videos', (request, reply) =>{
    database.create({
        "title" : "Video 01",
        "description" : "Esse é o video 01",
        "duration" : 3000,
    })
    console.log(database.list());
    return reply.status(201).send()
})

server.get('/videos', () =>{
    return 'Hello, world'
})

server.put('/videos/:id', () =>{
    return 'Hello, world'
})

server.delete('/videos/:id', () =>{
    return 'Hello, world'
})


server.listen({
    port: 3333
})

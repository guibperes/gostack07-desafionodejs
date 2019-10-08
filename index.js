const express = require('express')

const server = express()
const requisitionCounter = 0
const projects = []

server.use(express.json())

server.get('/projects', (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.post('/projects', (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.put('/projects/:id', (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.delete('/projects/:id', (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.post('/projects/:id/tasks', (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.listen(3000, console.log('Server is running on port 3000'))

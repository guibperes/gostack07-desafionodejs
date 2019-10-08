const express = require('express')

const server = express()
let requisitionCounter = 0
const projects = []

function logger (req, res, next) {
  requisitionCounter = requisitionCounter + 1

  console.log(`REQUISITION: ${requisitionCounter}`)
  next()
}

function isProjectExists (req, res, next) {
  const { id } = req.params
  const isIdExists = projects.includes(item => item.id === id)

  if (!isIdExists) {
    return res.status(400).json({ message: 'O id informado não foi encontrado' })
  }

  next()
}

server.use(express.json())
server.use(logger)

server.get('/projects', (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.post('/projects', (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.put('/projects/:id', isProjectExists, (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.delete('/projects/:id', isProjectExists, (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.post('/projects/:id/tasks', isProjectExists, (req, res) => {
  res.json({ message: 'Not implemented' })
})

server.listen(3000, console.log('Server is running on port 3000'))

const express = require('express')

const server = express()

let requisitionCounter = 0
let projects = []

function logger (req, res, next) {
  requisitionCounter = requisitionCounter + 1

  console.log(`REQUISITION: ${requisitionCounter}`)
  next()
}

function isProjectExists (req, res, next) {
  const { id } = req.params
  const project = projects.filter(item => item.id === id)

  if (project.length === 0) {
    return res.status(400).json({ message: 'O id informado não foi encontrado' })
  }

  next()
}

function isValidProjectFields (req, res, next) {
  const { id, title } = req.body

  if (!id) {
    return res.status(400).json({ message: 'Informe um id válido' })
  }

  if (!title) {
    return res.status(400).json({ message: 'Informe um titulo válido' })
  }

  next()
}

function isValidTitle (req, res, next) {
  const { title } = req.body

  if (!title) {
    return res.status(400).json({ message: 'Informe um titulo válido' })
  }

  next()
}

server.use(express.json())
server.use(logger)

server.get('/projects', (req, res) => {
  res.json({ projects })
})

server.post('/projects', isValidProjectFields, (req, res) => {
  const { id, title } = req.body

  projects = [
    ...projects,
    { id, title, tasks: [] }
  ]

  res.status(201).json()
})

server.put('/projects/:id', isProjectExists, isValidTitle, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  projects = projects.map(project => {
    if (project.id === id) {
      return {
        ...project,
        title
      }
    }

    return project
  })

  res.status(204).json()
})

server.delete('/projects/:id', isProjectExists, (req, res) => {
  const { id } = req.params

  projects = projects.filter(item => item.id !== id)

  res.status(204).json()
})

server.post('/projects/:id/tasks', isProjectExists, isValidTitle, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  projects = projects.map(project => {
    if (project.id === id) {
      return {
        ...project,
        tasks: [
          ...project.tasks,
          title
        ]
      }
    }

    return project
  })

  res.status(201).json()
})

server.listen(3000, console.log('Server is running on port 3000'))

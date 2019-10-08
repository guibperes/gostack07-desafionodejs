const express = require('express')

const server = express()

/*
- Query Params = ?teste=1
- Route Params = /users/1
- Request Body = { "name": "Guilherme Beidaki Peres", "email": "guibperes@gmail.com" }
*/

server.get('/teste', (req, res) => {
  // const name = req.query.name
  const { name } = req.query

  res.json({ name })
})

server.get('/users/:id', (req, res) => {
  // const id = req.params.id
  const { id } = req.params

  res.json({ id })
})

server.listen(3000, console.log('Server is running on port 3000'))

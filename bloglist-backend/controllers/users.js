const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
require('express-async-errors')

userRouter.post('/', async (req, res) => {
  const body = req.body

  if (body.password === undefined || body.password.length < 3) {
    return res.status(400).send({ error: 'password length should be 3 or more characters'})
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash
  })

  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

userRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogs')
  res.json(users)  
})

module.exports = userRouter
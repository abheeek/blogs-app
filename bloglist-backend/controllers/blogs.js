const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('express-async-errors')

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  res.json(blogs)
})

blogsRouter.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('user', { username: 1, name: 1 })

  if (blog) {
    res.json(blog)
  } else {
    res.status(404).end()
  }
})

blogsRouter.post('/', async (req, res) => {
  const body = req.body
  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  if (!req.token || !decodedToken) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  if (!body.title || !body.url) {
    return res.status(400).json({ error: 'title/url missing' })
  }

  const user = await User.findById(decodedToken.id)

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes === undefined ? 0 : body.likes,
    user: user._id
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  
  res.status(201).json(savedBlog)
})

blogsRouter.put('/:id', async (req, res) => {
  const body = req.body
  const decodedToken = jwt.verify(req.token, process.env.secret)

  if (!req.token || !decodedToken) {
    return res.status(401).json({ error: 'token missing or invalid'})
  }
  // if (!body.title || !body.url || body.likes) {
  //   return res.status(400).json({ error: 'title/url/likes missing'})
  // }

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, blog, { new: true }).populate('user', { username: 1, name: 1 })
  res.json(updatedBlog)
})

blogsRouter.delete('/:id', async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET)
  const blog = await Blog.findById(req.params.id)
  
  if (!blog) {
    return res.status(404).end()
  }
  console.log(blog.user.toString())
  console.log(decodedToken.id)
  if (blog.user.toString() !== decodedToken.id) {
    console.log("INSIDE BACKEND ERROR HANDLER")
    return res.status(403).send({ error: 'access denied to blog'})
  }
  await Blog.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

module.exports = blogsRouter
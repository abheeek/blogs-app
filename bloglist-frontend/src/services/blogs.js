import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
let config = null
const setToken = newToken => {
  token = `bearer ${newToken}`
  config = {
    headers: { Authorization: token }
  }
  console.log(token)
  console.log(config)
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async blog => {
  const response = await axios.post(baseUrl, blog, config)
  return response.data
}

const updateLikes = async blog => {
  const response = await axios.put(`/api/blogs/${blog.id}`, {...blog, likes: blog.likes + 1}, config)
  return response.data
}

const remove = async blog => {
  return await axios.delete(`/api/blogs/${blog.id}`, config)
}

export default { getAll, create, updateLikes, remove, setToken }
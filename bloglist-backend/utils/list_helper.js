const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => {
    return sum + blog.likes;
  }, 0)
}

const favoriteBlog = (blogs) => {
  const maxId = Math.max(...blogs.map(blog => blog.likes));
  return blogs.filter(blog => blog.likes === maxId)[0];
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};
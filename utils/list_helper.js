const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.reduce((sum, blog) => {
    return sum += blog.likes
  }, 0)
}

const favoriteBlog = blogs => {
  if (!blogs.length) return -1

  const likes = blogs.map(blog => blog.likes)
  const favorite = blogs.find(blog => {
    return blog.likes === (Math.max(...likes))
  })

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

const mostBlogs = blogs => {
  if (!blogs.length) return -1
  const blogsPerAuthor = []

  blogs.forEach(blog => {
    const index = blogsPerAuthor.findIndex(element => element.author === blog.author)
    index > -1 ? blogsPerAuthor[index].blogs++ : blogsPerAuthor.push({ author: blog.author, blogs: 1 })  
  })

  return blogsPerAuthor.find(author => {
    return author.blogs === Math.max(...Object.values(blogsPerAuthor.map(author => author.blogs)))
  })
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}

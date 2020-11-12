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
  const likesPerAuthor = []

  blogs.forEach(blog => {
    const index = likesPerAuthor.findIndex(element => element.author === blog.author)
    index > -1 ? likesPerAuthor[index].blogs++ : likesPerAuthor.push({ author: blog.author, blogs: 1 })  
  })

  return likesPerAuthor.find(author => {
    return author.blogs === Math.max(...Object.values(likesPerAuthor.map(author => author.blogs)))
  })
}

const mostLikes = blogs => {
  if (!blogs.length) return -1
  const likesPerAuthor = []

  blogs.forEach(blog => {
    const index = likesPerAuthor.findIndex(element => element.author === blog.author)
    index > -1 ? likesPerAuthor[index].likes += blog.likes : likesPerAuthor.push({ author: blog.author, likes: blog.likes })  
  })

  return likesPerAuthor.find(author => {
    return author.likes === Math.max(...Object.values(likesPerAuthor.map(author => author.likes)))
  })
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}

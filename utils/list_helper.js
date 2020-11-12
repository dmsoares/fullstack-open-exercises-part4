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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
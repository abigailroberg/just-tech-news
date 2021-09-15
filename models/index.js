const User = require('./User')
const Post = require('./Post')
const Vote = require('./Vote')

// create association (1 user has many posts)
User.hasMany(Post, {
    foreignKey: 'user_id'
})
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// create association (through votes)
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
})
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
})

// create association (1 vote to 1 user)
Vote.belongsTo(User, {
    foreignKey: 'user_id'
})

// create association (1 vote to 1 post)
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
})

// create association (1 user has many votes)
User.hasMany(Vote, {
    foreignKey: 'user_id'
})

// create association (1 post has many votes)
Post.hasMany(Vote, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Vote }
const User = require('./User')
const Post = require('./Post')

// create association (1 user has many posts)
User.hasMany(Post, {
    foreignKey: 'user_id'
})
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Post }
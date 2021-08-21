// import all models
const User = require('./User');
const Rank = require('./Rank');
const Game = require('./Game');
const Categories = require('./Categories');
const Following = require('./Following');
const Comment = require('./Comment');

//Game belongs to Categories
Game.belongsTo(Categories, {
  foreignKey: "category_id",
});

//Categories has many games
Categories.hasMany(Game, {
    foreignKey: 'category_id'
})

Following.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Following, {
    foreignKey: 'user_id'
})

Rank.belongsTo(User, {
  foreignKey: "user_id",
});

Rank.belongsTo(Game, {
  foreignKey: "game_id",
});

User.hasMany(Rank, {
  foreignKey: "user_id",
});

Game.hasMany(Rank, {
  foreignKey: "game_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Game, {
  foreignKey: "game_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Game.hasMany(Comment, {
  foreignKey: "game_id",
});

module.exports = { User, Rank, Game, Categories, Comment, Following };

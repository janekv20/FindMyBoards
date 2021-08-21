const { Game, Categories, Comment, Rank, User } = require('../models');
const sequelize = require("../config/connection");
const router = require('express').Router();
const withAuth = require('../utils/auth');

// When the user navigates to the home page they are sent to the index.js file which routes them to this file
// Then this file renders the homepage.handlebars template
router.get('/', (req, res) => {
 res.render('homepage',{
  title: 'Home Page',
  loggedIn: req.session.loggedIn
});
});

router.get('/loggedin', withAuth, (req, res) => {
  res.render('homepage',{
   title: 'Home Page',
   loggedIn: true
 });
 });

router.get('/signup', (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup',{
    title: 'Sign Up',
    loginPage: false,
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login',{
    title: 'Login',
    loginPage: true,
  });
});

router.get('/game/:id', (req,res) => {
  Game.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'game_name',
      'category_id',
      'min_number_of_players',
      'max_number_of_players',
      'avg_min_game_time',
      'avg_max_game_time',
      'game_description'
    ],
    include: [
      {
        model: Categories,
        attributes: ['id', 'category_name']
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "game_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: Rank,
        attributes: ["id", "game_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ]
  })
  
  .then(dbGameData => {
    
  
    if(!dbGameData) {
      res.status(404).json({message: 'No game found with this id'});
      return;
    }

    const game = dbGameData.get({plain:true});

    res.render('single-game', {
      game,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
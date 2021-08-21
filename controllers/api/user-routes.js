const router = require("express").Router();
const { User, Rank, Following, Game, Comment } = require("../../models");

// get users
router.get("/", (req, res) => {
  // access our user model and run .findAll() method)
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get user data by username
router.get('/username/:username', (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      username: req.params.username
    },
    include: [
      // comments and all their attributes and include game names they commented on
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Game,
          attributes: ["game_name"],
        },
      },
      // games attribute name through rank as ranked games
      {
        model: Rank,
        attributes: ["id", "user_id", "game_id"],
        include: {
          model: Game,
          attributes: ["game_name"],
        },
      },
      {
        model: Following,
        attributes: ['id', 'following_username'],
      },
    ]
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this username" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

//GET /api/users/1
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      // comments and all their attributes and include game names they commented on
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Game,
          attributes: ["game_name"],
        },
      },
      // games attribute name through rank as ranked games
      {
        model: Rank,
        attributes: ["id", "user_id", "game_id"],
        include: {
          model: Game,
          attributes: ["game_name"],
        },
      },
      {
        model: Following,
        attributes: ['id', 'following_username'],
      },
    ]
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create username
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update user route
router.put("/:id", (req, res) => {
  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete route
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      console.log(req.session);

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

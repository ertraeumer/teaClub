const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const saltRounds = 5;

router
  .route('/signUp')
  .get((req, res) => {
    res.render('signup');
  })
  .post(async (req, res) => {
    const { userName, password } = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    const currUser = await User.create({
      login: userName,
      password: hash,
      isAdmin: false,
    });
    req.session.userId = currUser.id;
    res.redirect('/');
  });

router
  .route('/signIn')
  .get((req, res) => {
    res.render('signin');
  })
  .post(async (req, res) => {
    const { userName, password } = req.body;
    const user = await User.findOne({ where: { login: userName } });
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      req.session.userId = user.id;
      res.redirect('/all_teas');
    } else {
      res.redirect('/user/signup');
    }
  });

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('name');
  res.redirect('/');
});

module.exports = router;

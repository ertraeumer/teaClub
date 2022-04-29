const router = require('express').Router();
const { Tea, Comment, User } = require('../db/models');

// all_teas
router.get('/', async (req, res) => {
  try {
    let latestComments = await Comment.findAll({ include: [{ model: User }, { model: Tea }], order: [['createdAt', 'DESC']], limit: 4 });
    // console.log(JSON.parse(JSON.stringify(latestComments)));
    res.render('all_teas', { latestComments }); // res.status(200)?
  } catch (error) {
    res.send('Ooops, you have got an error:', error);
  }
});

router.get('/:tea_id', async (req, res) => {
  const { tea_id } = req.params;
  try {
    const exactTea = await Tea.findOne({ where: { id: tea_id }, raw: true });
    const commentsToExactTea = await Comment.findAll({ include: User, where: { tea_id } });
    if (exactTea === null) res.redirect('/all_teas')
    res.render('aboutTea', { exactTea, commentsToExactTea });
  } catch (error) {
    res.send('Ooops, you have got an error:')
  }
});

router.post('/:tea_id', async (req, res) => {
  const { tea_id } = req.params;
  const { content } = req.body;
  try {
    await Comment.create({ content, tea_id, user_id: req.session?.userId });
    res.redirect(`/all_teas/${tea_id}`);
    // console.log(req.session.userId);
  } catch (error) {
    res.send('Ooops, you have got an error:', error);
  }
});

router.get('/new_tea', (req, res) => {
  res.render('new_tea_form');
});

router.post('/new_tea', async (req, res) => {
  const { tea_name, from, description, image } = req.body;
  try {
    await Tea.create({ tea_name, from, description, image });
    res.redirect('/all_teas');
  } catch (error) {
    res.send('Ooops, you have got an error:', error);
  }
});

router.get('/delete/:tea_id', async (req, res) => {
  const { tea_id } = req.params;
  console.log(tea_id);
  try {
    await Tea.destroy({ where: { id: tea_id } });
    res.redirect('http://localhost:3000/all_teas');
  } catch (error) {
    console.log(error)
    res.send('Ooops, you have got an error:');
  }
});

module.exports = router;

// для главной страницы получить все чаи  /all_teas/+
// для страницы конкретного чая получить информацию о нем /all_teas/earl_gray (:params?)+
// для формы добавления чая сделать добавление чая в бд /all_teas/new_tea+
// для удаления чая удалять из бд del... redirect(/all_teas)

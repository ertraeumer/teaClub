const router = require('express').Router();
const { Tea, Comment, User } = require('../db/models');

// all_teas
router.get('/', async (req, res) => {
  try {
    let latestComments = await Comment.findAll({ include: [{ model: User }, { model: Tea }], order: ['createdAt'], limit: 5, raw: true });
    res.status(200).render('all_teas', { latestComments }); // res.status(200)?
  } catch (error) {
    res.send('Ooops, you have got an error:', error);
  }
});

router.get('/:tea_id', async (req, res) => {
  const { tea_id } = req.params;
  try {
    const exactTea = await Tea.findOne({ where: { id: tea_id } });
    const commentsToExactTea = await Comment.findAll({ where: { tea_id }})
    res.render('tea_page', { exactTea, commentsToExactTea });
  } catch (error) {
    res.send('Ooops, you have got an error:', error);
  }
});

router.get('/new_tea', (req ,res) => {
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
  try {
    await Tea.destroy({ where: { id: tea_id } });
    res.redirect('/all_teas');
  } catch (error) {
    res.send('Ooops, you have got an error:', error);
  }
});

module.exports = router;

// для главной страницы получить все чаи  /all_teas/+
// для страницы конкретного чая получить информацию о нем /all_teas/earl_gray (:params?)+
// для формы добавления чая сделать добавление чая в бд /all_teas/new_tea+
// для удаления чая удалять из бд del... redirect(/all_teas)

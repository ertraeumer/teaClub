const { User, Comment, Tea } = require('./db/models');

async function main() {
  const res = await Comment.findAll({ include: [{ model: User }, { model: Tea }], order: ['createdAt'], limit: 5, raw: true });
  console.log(res);
}

main();

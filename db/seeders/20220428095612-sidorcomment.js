'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
    await queryInterface.bulkInsert('Comments', [{
      content: 'Этот чай очень вкусныйю Успокаивает и бодрит одновременно',
      user_id: 2,
      tea_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Мне не понравится. Какой то горький',
      user_id: 1,
      tea_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Это просто рай для рта. Выпила весь чай за 3 дня',
      user_id: 4,
      tea_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Самый лучший чай в моей жизни',
      user_id: 4,
      tea_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Самый лучший чай в моей жизни',
      user_id: 4,
      tea_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Этот чай очень вкусныйю Успокаивает и бодрит одновременно',
      user_id: 5,
      tea_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Это просто рай для рта. Выпила весь чай за 3 дня',
      user_id: 7,
      tea_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Это просто рай для рта. Выпила весь чай за 3 дня',
      user_id: 7,
      tea_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Этот чай очень вкусныйю Успокаивает и бодрит одновременно',
      user_id: 7,
      tea_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Этот чай очень вкусныйю Успокаивает и бодрит одновременно',
      user_id: 1,
      tea_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Этот чай очень вкусныйю Успокаивает и бодрит одновременно',
      user_id: 3,
      tea_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Этот чай очень вкусныйю Успокаивает и бодрит одновременно',
      user_id: 3,
      tea_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Мне не понравится. Какой то горький',
      user_id: 4,
      tea_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Этот чай очень вкусныйю Успокаивает и бодрит одновременно',
      user_id: 6,
      tea_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Мне не понравится. Какой то горький',
      user_id: 6,
      tea_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
    await queryInterface.bulkDelete('Comments', null, {});
  },
};

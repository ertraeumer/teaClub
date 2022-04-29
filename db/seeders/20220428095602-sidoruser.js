'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
    await queryInterface.bulkInsert('Users', [{
      login: 'Тамара Петровна',
      password: 123,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Иван Кудряшев',
      password: 123,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Джон Пижон',
      password: 123,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Ульяна Кукурузина',
      password: 123,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Света Кулькова',
      password: 123,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Антон Баранов',
      password: 123,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Георгий Тараканов',
      password: 123,
      isAdmin: false,
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};

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
      login: 'John Doe',
      password: 123,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'James Kik',
      password: 123,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Pfon Bon',
      password: 123,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Je Cor',
      password: 123,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Ja Wohl',
      password: 123,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Franz Ferdinand',
      password: 123,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'Gip Gop',
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

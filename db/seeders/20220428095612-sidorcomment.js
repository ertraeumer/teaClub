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
      content: 'CS',
      user_id: 2,
      tea_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COSANDERS',
      user_id: 1,
      tea_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COLONEL SANDERS',
      user_id: 4,
      tea_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'NDERS',
      user_id: 4,
      tea_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COLONEL',
      user_id: 4,
      tea_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COLRS',
      user_id: 5,
      tea_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COLONaaaaaaDERS',
      user_id: 7,
      tea_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COLOlplplplplpANDERS',
      user_id: 7,
      tea_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COLONkkkRS',
      user_id: 7,
      tea_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COLOj;NDERS',
      user_id: 1,
      tea_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COERS',
      user_id: 3,
      tea_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COL',
      user_id: 3,
      tea_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COL;kjpRS',
      user_id: 4,
      tea_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COEL SANDERS',
      user_id: 6,
      tea_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'COLERS',
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

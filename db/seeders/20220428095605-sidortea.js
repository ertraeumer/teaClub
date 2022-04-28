'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
    await queryInterface.bulkInsert('Teas', [{
      tea_name: 'Majic Yuunan',
      from: 'South China',
      description: 'Supa dupa yanyan',
      image: 'google.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tea_name: 'Earl Gray',
      from: 'East China',
      description: 'mmm bergamot',
      image: 'no image fck you',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tea_name: 'Green Melissa',
      from: 'China',
      description: 'norm chai',
      image: '___',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tea_name: 'Greenfield',
      from: 'India',
      description: 'fine',
      image: 'thank you',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tea_name: 'Princess Nouri',
      from: 'South India',
      description: 'deshevo serdito',
      image: 'kak v detstve',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tea_name: 'chifir',
      from: 'Russian zona',
      description: 'a ne petuh li ti chasom',
      image: 'fsin.ru',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tea_name: 'Kenyan Sunrise',
      from: 'East Virginia',
      description: 'chto vspomnil',
      image: 'hz',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tea_name: 'beseda',
      from: 'belarus',
      description: 'chai beseda',
      image: 'kartinka',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tea_name: 'blablabla',
      from: 'somewhere',
      description: 'no idea',
      image: 'oops',
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
    await queryInterface.bulkDelete('Teas', null, {});
  },
};

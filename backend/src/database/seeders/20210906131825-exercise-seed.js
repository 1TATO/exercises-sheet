'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Exercises', [{
      name: 'Flexao',
      weight: '-',
      repetitions: '3X12',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Exercises', [{
      name: 'Supino',
      weight: '20',
      repetitions: '4X12',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Exercises', null, {});
  }
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          name: "Pepper",
          email: "pepper@pepper.com",
          onDuty: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Doolittle",
          email: "doo@doo.com",
          onDuty: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Oetker",
          email: "oetker@oetker.com",
          onDuty: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Love",
          email: "love@love.com",
          onDuty: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Strange",
          email: "strange@strange.com",
          onDuty: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("doctors", null, {});
  }
};

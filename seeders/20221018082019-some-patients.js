"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "patients",
      [
        {
          name: "Leo Messi",
          email: "leo@messi.com",
          phone: 1234567,
          password: "test",
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan Abramov",
          email: "dan@redux.com",
          phone: 1234567,
          password: "test",
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("patients", null, {});
  },
};

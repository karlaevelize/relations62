### Useful commands

- Generate Models & Migrations

`npx sequelize-cli model:generate --name user --attributes name:string,email:string,phone:integer,password:string`

- Generate Seed files

`npx sequelize-cli seed:generate --name some-users`

### Why add relations ?

### Types of relation

**One to One**:

user.hasOne - BSN
BSN.belongsTo - user

user.hasOne - brain
brain.belongsTo - user

user.hasOne - driversLicense
driversLicense.belongsTo - user

user.hasOne - birthCertificate
birthCertificate.belongsTo - user

user.hasOne - partner
partner.belongsTo - user

**One to Many**:

user.hasMany - bankAccounts
bankAccounts.belongsTo - user

user.hasMany - toothbrushes
toothbrushes.belongsTo - user

bankAccount.hasMany - payments
payments.belongTo - bankAccounts

person.hasMany - clothes
clothes.belongsTo - user

person.hasMany - passports
passports.belongsTo - person

**Many to Many**:

classes <-> users
products <-> order
products <-> wishlist
user <-> sharedAccount
friends <-> friends

### What to do:

1. Add a doctorId to patients

- Modify migration files
- Modify model files

2. Modify our seeds to include the doctorId

### Steps

1. Undo migrations `npx sequelize-cli db:migrate:undo:all`
2. Add the `doctorId` column on patients
3. Add an extra object called `references`
4. Modify the seeds to add the `doctorId`
5. Test it -> by migrating and seeding

6. Add the relation on the models
7. Write queries to test it

### Steps to add relation

**Step 0:** Undo all your migrations and add the Foreign key to the seeds

`npx sequelize-cli db:migrate:undo:all`

**Step 1:** Generate a new file to add the relation

`npx sequelize-cli migration:generate --name set-up-relations`

**Step 2:** Modify that file to describe the relation

```js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId");
  },
};
```

**Step 3:** Migrate and check Postico/DBeaver (here you test the migration files)

`npx sequelize-cli db:migrate`

**Step 4:** Write the relations in the models

**Step 5:** Write queries to test (here you test the model files)

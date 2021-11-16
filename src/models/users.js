module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
    },
    job: {
      type: Sequelize.STRING,
    },
  });

  return User;
};

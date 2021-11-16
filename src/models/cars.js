module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car", {
    name: {
      type: Sequelize.STRING,
    },
  });

  return Car;
};

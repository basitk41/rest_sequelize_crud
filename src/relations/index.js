module.exports = (db) => {
  // users-cars one-to-many relation.
  db.users.hasMany(db.cars, { as: "cars" });
  db.cars.belongsTo(db.users, { foreignKey: "userId", as: "user" });
};

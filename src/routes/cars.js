const router = require("express").Router();
const cars = require("../controllers/cars");
const { create, findAll, findOne, update, deleteOne, deleteAll } = cars;

module.exports = (app) => {
  router.route("/").get(findAll).post(create).delete(deleteAll);
  router.route("/:id").get(findOne).put(update).delete(deleteOne);
  app.use("/api/cars", router);
};

const router = require("express").Router();
const users = require("../controllers/users");
const { create, findAll, findOne, update, deleteOne, deleteAll } = users;

module.exports = (app) => {
  router.route("/").get(findAll).post(create).delete(deleteAll);
  router.route("/:id").get(findOne).put(update).delete(deleteOne);
  app.use("/api/users", router);
};

module.exports = (app) => {
  require("./users")(app);
  require("./cars")(app);
};

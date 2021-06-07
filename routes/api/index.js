const route = require("express").Router();

route.use("/v1", require("./v1").route);

module.exports = {route}
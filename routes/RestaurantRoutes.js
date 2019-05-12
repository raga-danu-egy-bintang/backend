const app = require("express").Router();

const {
  Restaurant: Middleware,
  handleValidatorError
} = require("../middleware");

const { checkCreateRestaurant, checkCreateReviewRestaurant } = Middleware;
const {
  createRestaurant,
  getRestaurants
} = require("../controllers").Restaurant;

// const Middleware = .Restaurant;

app.post("/", checkCreateRestaurant, handleValidatorError, createRestaurant);
app.get("/", getRestaurants);

module.exports = app;

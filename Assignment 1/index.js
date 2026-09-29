const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

const number = 8;

logger("Checking if number is even");

if (isEven(number)) {
  logger(number + " is Even");
} else {
  logger(number + " is Odd");
}

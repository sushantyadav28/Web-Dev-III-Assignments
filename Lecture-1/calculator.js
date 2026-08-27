const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (operation) {
  case "add":
    console.log("Result:", num1 + num2);
    break;

  case "sub":
    console.log("Result:", num1 - num2);
    break;

  case "mul":
    console.log("Result:", num1 * num2);
    break;

  case "div":
    if (num2 === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log("Result:", num1 / num2);
    }
    break;

  default:
    console.log("Invalid Operation");
}

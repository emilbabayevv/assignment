const Calculator = require("./calculator");

const calc = new Calculator();

function calculate(a, operator, b) {

if (operator === "+") return calc.add(a, b);
if (operator === "-") return calc.subtract(a, b);
if (operator === "*") return calc.multiply(a, b);
if (operator === "/") return calc.divide(a, b);

}

module.exports = calculate;

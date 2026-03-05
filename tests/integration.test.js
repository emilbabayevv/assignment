const Calculator = require("../calculator");

test("full calculation 5 + 3 = 8", () => {
const calc = new Calculator();
expect(calc.add(5,3)).toBe(8);
});

test("clear resets value", () => {
const calc = new Calculator();
expect(calc.clear()).toBe(0);
});

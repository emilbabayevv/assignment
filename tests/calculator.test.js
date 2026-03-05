const Calculator = require("../calculator");

const calc = new Calculator();

test("addition", () => {
expect(calc.add(5,3)).toBe(8);
});

test("subtraction", () => {
expect(calc.subtract(10,4)).toBe(6);
});

test("multiplication", () => {
expect(calc.multiply(6,7)).toBe(42);
});

test("division", () => {
expect(calc.divide(8,2)).toBe(4);
});

test("negative numbers", () => {
expect(calc.add(-2,-3)).toBe(-5);
});

test("decimal numbers", () => {
expect(calc.divide(5,2)).toBe(2.5);
});

test("large numbers", () => {
expect(calc.multiply(100000,10)).toBe(1000000);
});

test("division by zero", () => {
expect(() => calc.divide(5,0)).toThrow();
});

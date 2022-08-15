const calculator = require("./calculator");

describe("Testing calculator class", () => {
  test("Add test", () => {
    expect(calculator.add(4, 2)).toBe(6);
  });

  test("subtract test", () => {
    expect(calculator.subtract(16, 4)).toBe(12);
  });

  test("divide test", () => {
    expect(calculator.divide(46, 2)).toBe(23);
  });

  test("multiply test", () => {
    expect(calculator.multiply(7, 3)).toBe(21);
  });
});

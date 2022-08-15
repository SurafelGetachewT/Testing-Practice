const capitalize = require("./capitalize");

describe("Test capitalize function", () => {
  test("Test Capitalization", () => {
    expect(capitalize("programming")).toBe("Programming");
  });

  test("microverse", () => {
    expect(capitalize("microverse")).toBe("Microverse");
  });
});

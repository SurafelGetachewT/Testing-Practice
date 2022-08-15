const stringLength = require("./stringLength");
describe("Testing for length of String", () => {
  test('Length of "Sura"', () => {
    expect(stringLength("Sura")).toBe(4);
  });
  test("Empty String Length", () => {
    expect(stringLength("")).toThrow(
      "The string should be at least 1 character long and not more than 10"
    );
  });

  test('"Surafel Getchew" String Length', () => {
    expect(stringLength("Surafel Getchew")).toThrow(
      "The string should be at least 1 character long and not more than 10"
    );
  });
});

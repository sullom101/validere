import calculate from "../utils/calculate.js";
describe("Calculate", () => {
  let expression;
  it("evaluates the expression correctly", () => {
    expression = "2+3+4-4*3";
    expect(calculate(expression)).toBe(-3);

    expression = "0+3+4";
    expect(calculate(expression)).toBe(7);

    expression = "0-9";
    expect(calculate(expression)).toBe(-9);

    expression = "0.5+2.3";
    expect(calculate(expression)).toBe(2.8);
  });
});

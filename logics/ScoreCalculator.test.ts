import { calculate } from "./ScoreCalculator";

describe("basic", () => {
  it("basic", () => {
    const score = calculate([null, null, null], [2, 7]);
    expect(score).toBe(14);
  });

  it("double 2", () => {
    const score = calculate([null, null, null], [2, 2]);
    expect(score).toBe(18);
  });

  it("selected 7 and select 2 and 9", () => {
    const score = calculate([7, null, null], [2, 9]);
    expect(score).toBe(18);
  });

  it("selected 2 and select 2 and 3", () => {
    const score = calculate([2, null, null], [2, 3]);
    expect(score).toBe(16);
  });
});

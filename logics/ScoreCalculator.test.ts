import { calcBonusScore, calculate } from "./ScoreCalculator";

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

describe("triple", () => {
  it("should be +2 when all of inputs are odd", () => {
    const score = calcBonusScore([3, 5, 9]);
    expect(score).toBe(2);
  });

  it("should be -2 when all of inputs are even", () => {
    const score = calcBonusScore([2, 4, 8]);
    expect(score).toBe(-2);
  });

  it("should be +4 when all of inputs are less than 8", () => {
    const score = calcBonusScore([3, 4, 5]);
    expect(score).toBe(4);
  });

  it("should be +4 when all of inputs are greater than 6", () => {
    const score = calcBonusScore([7, 8, 9]);
    expect(score).toBe(4);
  });

  it("should be 0 when null is included", () => {
    const score = calcBonusScore([3, 5, null]);
    expect(score).toBe(0);
  });

  it("should be +2 when all of inputs are even and less than 8", () => {
    const score = calcBonusScore([2, 4, 6]);
    expect(score).toBe(2);
  });
});

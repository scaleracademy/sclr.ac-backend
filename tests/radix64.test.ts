import { intToRadix64, radix64toInt } from "../src/services/radix64";

describe("Running tests for radix64", () => {
  it("converts int to radix64 correctly", () => {
    const inputInt = 64445283;
    const expectedOutput = "3RRJz";

    expect(intToRadix64(inputInt)).toEqual(expectedOutput);
  });

  it("converts radix64 to int correctly", () => {
    const inputRadix64 = "3RRJz";
    const expectedOutput = 64445283;

    expect(radix64toInt(inputRadix64)).toEqual(expectedOutput);
  });
});

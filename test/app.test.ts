import { hi } from "@services/hi";

describe("This is a simple test", () => {
  test("Check the sampleFunction function", () => {
    expect(hi("hello")).toEqual("hellohello");
  });
});
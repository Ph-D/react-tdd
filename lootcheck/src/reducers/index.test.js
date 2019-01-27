import rootReducer from "./index";

describe("rootReducer", () => {
  it("initiliazes the default state", () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});

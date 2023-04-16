import { save, remove } from "../../storage";

const mockLocalStorage = {
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

describe("Logout functionality", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.localStorage = mockLocalStorage;
  });

  it("Adds value to local storage", () => {
    save("accessToken", 98765);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      "accessToken",
      "98765"
    );
  });

  it("Removes value from local storage", () => {
    remove("accessToken");
    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("accessToken");
  });
});

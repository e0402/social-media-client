import { login } from "./login";

describe("Login functionality", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Fetches profile data that is saved to local storage", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: () =>
          Promise.resolve({
            name: "Someone",
            email: "Something@example.com",
            accessToken: 98765,
          }),
      })
    );

    global.localStorage = {
      setItem: jest.fn(),
    };

    const profile = await login();
    expect(global.localStorage.setItem).toHaveBeenCalledWith("token", "98765");
    expect(profile).toEqual({
      name: "Someone",
      email: "Something@example.com",
    });
  });
});

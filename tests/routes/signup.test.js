const { User } = require("../../database");

describe("MakersBnB Sign Up Page", () => {
  it("has title Sign Up", async () => {
    // The port is 4444 here because it is your test server, not your real one
    await page.goto("http://localhost:4444/signup"); //puppeteer click on button
    await expect(page).toMatchElement("title", { text: "Sign Up" });
  });
});

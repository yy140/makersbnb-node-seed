const { User } = require("../../database");

describe("Sign in", () => {
  it("when valid credentails are used, signs a user in and redirects to spaces", async () => {
   // The port is 4444 here because it is your test server, not your real on
    await page.goto("http://localhost:4444/signin"); //puppeteer click on button
    await page.$eval('#username', el => el.value = 'user');
    await page.$eval('#password', el => el.value = '1234');
   // await page.type('#password', '1234');
    await page.click('input[type="submit"]');
    await page.goto("http://localhost:4444/spaces");
    await expect(page).toMatchElement("p", { text: "Available spaces"});
  });
  });


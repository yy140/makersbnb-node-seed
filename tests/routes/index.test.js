const fs = require('fs');
const { User } = require('../../database');

describe('MakersBnB Index', () => {
  it('has title MakersBnB', async () => {
    // The port is 4444 here because it is your test server, not your real one
    await page.goto('http://localhost:4444/');
    await expect(page).toMatchElement('title', { text: 'MakersBnB' });
  });

  it('welcomes the visitor', async () => {
    await page.goto('http://localhost:4444/');
    await expect(page).toMatchElement('p', { text: 'Welcome to MakersBnB' });
  });

  describe('when there are no users', () => {
    it('shows that there are no users', async () => {
      await page.goto('http://localhost:4444/');
      await expect(page).toMatchElement('p', { text: 'There are 0 users signed up.' });
    });
  });

  // it('debugs', async () => {
  //   await page.goto('http://localhost:4444/notarealpage');
  //
  //   // Writes a screenshot to tmp/screenshot.png
  //   await page.screenshot({ path: 'tmp/screenshot.png', fullPage: true });
  //
  //   // Writes a copy of the HTML to tmp/page.html
  //   var contents = await page.content();
  //   fs.writeFileSync('tmp/page.html', contents);
  // });
});

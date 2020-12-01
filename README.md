# MakersBnB Node Seed Codebase

So you want to do MakersBnB in NodeJS! Great to hear. You'll learn a lot about
making a full-stack Javascript application.

An important part of the philosophy behind modern Javascript is that instead
of using a few large frameworks, the developers should use many small modules
and build from those. In that way, they can get their project exactly the way
it fits them and the problem they are working on.

The programming language Perl used to have the motto 'There's more than one way
to do it!' — Javascript has the same principle in mind. We might also say
Javascript is 'unopinionated'.

However, this makes setting up a new project as a junior dev quite a bit of work
with a number of pitfalls. You can spend a lot of the week just setting up your
project and not getting anywhere with the functionality.

For this reason, we have provided a starter template. It comes with:

* A web server ([ExpressJS](https://expressjs.com/))
* A testing library ([Jest](https://jestjs.io/))
* A web feature testing set up ([Puppeteer](https://pptr.dev/) and
  [Jest-Puppeteer](https://github.com/smooth-code/jest-puppeteer))
* A database and ORM set up ([Sequelize](https://sequelize.org/) and
  [Sqlite](https://www.sqlite.org/index.html))

And a straightforward set of examples to show you how they all connect up.

Have fun!

## Quickstart

```bash
; brew install node # If you've not already got node installed

; git clone https://github.com/makersacademy/makersbnb-node-seed.git
; npm install

# Now run the tests to check everything is workng
; npm test
# If you see errors, contact a coach!

# Next, set up the database for your dev server
; npm run migrate-database
# You'll need to do this whenever you change the database models

# And this starts the web server!
; npm serve
# Your server is now running on http://localhost:3000

# Note that you'll need to restart it when you change your code
# (Except sometimes you won't — try to figure out why!)
```

## Language

Javascript is a language with a few different versions. That means that some
code samples you see online won't work here. For example, if you see code like
this:

```javascript
import Something from 'file';
```

This uses something called ECMAScript Modules ('ECM'), which node doesn't
support natively at this time. You could add something called a 'babel plugin'
to make this work if you want to! If not, here's a translation sheet:

```javascript
import Something from 'file';
// Converts to:
var Something = require('file');

import { Something } from 'file';
// Converts to:
var { Something } = require('file');
```

## Debugging

This repository is set up with support for getting visibility! If you want to
learn, it is important to see what is going on.

Here are three ways you can get more visibility in this codebase:

1. **Turn on database logging.**  
   Look in `database.js` for a line to uncomment to see exactly what database
   queries are being executed.
2. **Turn on web-server logging in tests.**
   Look in `jest-puppeteer.config.js` for a line to uncomment to see exactly
   what web requests are being called in your tests.
3. **Use feature testing debugging tools.**
   See below.

```javascript
// Feel free to paste this into a test file to see what it does.

it('debugs', async () => {
  // First we'll trigger an error by going to a page that doesn't exist.
  await page.goto('http://localhost:4444/notarealpage');

  // This line writes a screenshot of what your tests are 'seeing'
  // to `tmp/screenshot.png`
  await page.screenshot({ path: 'tmp/screenshot.png', fullPage: true });

  // These two lines writes a copy of the HTML of the page to `tmp/page.html`
  var contents = await page.content();
  fs.writeFileSync('tmp/page.html', contents);
  // You can now run `open tmp/page.html` to see it in the web browser.
});
```

Other than that, don't forget to use `console.log`!

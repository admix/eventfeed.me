[eventfeed.me](http://eventfeed.me:8080)
============

## Short info to start

####Development

1. `git clone https://github.com/admix/eventfeed.me`
2. `npm install` - intalls all npm modules and bower components
3. `cp env.dev .env` - setup env veriables for your dev
4. `node web_static.js` - starts app on :80 or :8080 for localhost port

####Submitting PRs

1. `grunt` (validate and compress images)
2. Make a pull request against `admix/master`

## Contribution

####Dependencies

The setup portion of this README assumes you have the following installed:

* Node.js & npm
* Bower: `npm install -g bower`
* grunt-cli: `npm install -g grunt-cli`

####Project Setup

1. Clone eventfeed.me and enter the directory: `git clone https://github.com/admix/eventfeed.me && cd eventfeed.me`
2. Install eventfeed.me's Node and Bower dependencies: `npm install`
3. Run: node web_static.js

####Grunt Tasks

- `grunt` - Validate LESS, beautify and lint JS, compress images as needed. Run before you push.
- `grunt dev` - Run the server and build js files as they are changed
- `grunt verify` - Verify LESS and JS are formatted and lint free. Read only.

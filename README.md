[eventfeed.me](https://eventfeed.me)
============

## Short info to start

####Development

1. `git clone https://github.com/admix/eventfeed.me`
2. `npm install`
3. `cp env.dist .env`
4. `grunt dev` (Builds front end js. If you aren't working on front end assets you can just do `node app`)

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
3. Run: node app.js

####Grunt Tasks

- `grunt` - Validate LESS, beautify and lint JS, compress images as needed. Run before you push.
- `grunt dev` - Run the server and build js files as they are changed
- `grunt verify` - Verify LESS and JS are formatted and lint free. Read only.

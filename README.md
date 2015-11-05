# generator-nodecli

A node.js cli app generator for [Yeoman](http://yeoman.io).

[![Build Status](https://secure.travis-ci.org/walidsa3d/generator-nodecli.png?branch=master)](https://travis-ci.org/walidsa3d/generator-nodecli)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


### Install

To install from npm, run:

```
$ npm install -g generator-nodecli
```
### Usage
Initiate the generator:

```
$ yo nodecli
```
This generator will install the following files:

* package-json - initialized with the answers to all your questions.
* Gruntfile.js (if grunt is selected) - configured to use the following grunt modules:
    * grunt-complexity - show code complexity
    * grunt-contrib-watch - watch for changes then run tests
    * grunt-mocha-cli - run mocha tests
    * grunt-bump - easily release versions
* .travis.yml - set up so you can push and get [travis-ci](http://travis-ci.org)
   continous integration tests.
* .gitignore - ignore the usual stuff.
* LICENSE - MIT license initialized with your details.
* README.md - Initialized with your details and travis-ci badges.
* index.js - Initial library file
* test/index.js - unit test using mocha and chai


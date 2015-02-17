# Craft conference node webapp

### How to run locally

* go to the project root folder
* `npm install`
* `npm install grunt-cli -g`
* `grunt build`
* `npm start`
* go to http://localhost:8000

### Deploy

Deploy is automated on master. If you commit new things, your changes will be applied in 1 minute.

### Splash page

Splash page is a share page with all other conference pages, so it's a `git submodule` in `splash/src` folder + `docpad run`

#### clone splash page folder

* `git submodule init` in project root
* `git submodule update`

#### update spash image to the newest revision

* go to `splash/src` folder
* `git pull`
* go back to the root folder, and commit your changes

#### build splash page

* `npm install` in `splash` folder
* `npm install docpad -g`
* `docpad generate`
* splash source is generated to the `www` folder, it will be served under `/`

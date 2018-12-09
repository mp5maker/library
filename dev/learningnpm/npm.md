# NPM #
## What is NPM ##
* It is a node package manager
* Preinstalled with Node.js
* Easily install modules/packages on our system
* Modules are basically JavaScript libraries
* Makes it easy for developers to share and resuse code

```bash
    npm -v 
    npm --version
```
Get the current version of the npm

```bash
    npm --help
```
Get all the commands of the npm

### Package File ###
* Named with package.json
* Manifest file with app info
* List dependencies (Name & Version)
* Create NPM Scripts

```bash
    npm init 
```
Creates the package.json file

```bash
    npm init -y
    npm init --yes
```
Creates the package.json and answers all the questions

```bash
    npm config set init-author-name "Shabuktagin Photon Khan"
    npm set init-license "MIT"
```
Creates a package.json with -y flag with new default author name and license

```bash
    npm config delete init-author-name
    npm config delet init-license
```
Deletes the default author name and license

```bash
    npm install bootstrap --save
    npm install --save lodash
    npm install bootstrap
```
Installs the bootstrap in the npm_module and add dependency in the package.json

```bash
    npm install --save-dev gulp gulp-sass gulp-concat
    npm -i -D jest
```
Installs the multiple gulp modules and add the modules as dev dependency in package.json

```bash
    npm install
```
Installs all the modules that is in package.json including dev dependency and regular dependency

```bash
    npm install --production
```
Install only the regular dependency

```bash
    npm uninstall gulp gulp-sass --save-dev
    npm remove --save-dev gulp
    npm rm --save lodash
```
Removes the dependency from the node_modules as well as from the package.json

```bash
    npm install lodash@4.17.3 --save
```
Install specific version of the module

```bash
    npm update lodash
```
Updates the version of the module

```bash
    npm install -g nodemon
```
Install nodemon server globally

```bash
    npm remove -g nodemon
```
Removes nodemon server globally

```bash
    npm root -g
```
Gives the location of the globally installed packages directory

```bash
    npm list
```
Gives the list of the package dependency

```bash
    npm list --depth 0
    npm list --depth 1
    npm list --depth 2
```
Gives the list of the package dependency level


#### Semantic Version ####
8.2.6
* 8 ==> Represents the major version, major version breaks the API
* 2 ==> Minor Version, Add new features, does not break the API
* 6 ==> Patch and Bug fixes

##### Understanding the package.json dependency #####
```json
  "dependencies": {
    "bootstrap": "^4.1.3",
    "lodash": "~4.17.11"
  },
```
* "^" This signifies that if someone clones your repo, they will get the latest minor version
* "~" This signifies that if someone clones your repo, they will get the latest patch version
* "*" Wildcard represent get the latest major version, [Not Recommended]
* No Symbol ==> Will stick to the exact version
* Gets Tricky with alpha and beta version

##### Understanding the package.json script #####
```json
  "scripts": {
    "start": "node app.js",
    "json-server": "json-server --watch db.json"
  },
```
```bash
    npm run start
    npm start build
```
* Runs the the script [Kind of like shortcut]

**All thanks to [Traversy Media](http://traversymedia.com)
Please go to his website and support him for more free contents!**
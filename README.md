# nightwatchJs_PageObjects
Automation test scripting using nightwatchjs with page object model design pattern

##Sample Automation using Nightwatchjs

#Prerequisite installation
* JAVA 8
* NodeJS
* Visual Studio Code (or similar IDE)

#Installation Commands
```sh
npm install nightwatch
npm install nightwatch-html-reporter
npm install
```

#Runing Tests

From the root folder run command :
* Running all tests
```sh
node nightwatch
```

* Running group of tests
```sh
node nightwatch -a TagName
```

* Running tests with reporter enables
```sh
node nightwatch -a poc --reporter ./tests/nightwatch/html-reporter.js
```

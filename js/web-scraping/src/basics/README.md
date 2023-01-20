## Files

1. scrape.js
2. lsExec.js
3. lsSpawn.js
4. readingArgs.js
5. cleanArgs.js
6. combine.js
7. readFile.js
8. writeFile.js


## `scrape.js`

> Steps
* We request a url. eg: *Google Chrome*
* Server gets the url. eg: *Medex*
* Decides which html to show. eg: *Medex*
* Google chrome understands the html. eg: *Google Chrome*
* Then Google chrome shows in readable form for us. eg: *Google Chrome*

> Automate
* We request a url. eg: *Axios*
* Server gets the url. eg: *Medex*
* Decides which html to show. eg: *Medex*
* **Axios** do not understands the html. eg: *Axios* => *response.data*
* Use **Cheerio**, it transform like dom and the selectors can be like jQuery.
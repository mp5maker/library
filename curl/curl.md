# Curl Practice #

### Curl Help ###
```bash
    npm install -g json-server
    json-server --watch db.json
```
##### Resource Using #####
[Fake Rest API](http://jsonplaceholder.typicode.com/)

###### Basic Commands #######
```bash
    curl --help
```
* All the curl list options

```bash
    curl http://localhost:3000/posts/
```
* Gets the End Point (JSON response)

```bash
    curl http://localhost:3000/comments/3
```
* Gets the End Point (JSON response of a particular id)

```bash
    curl -i http://localhost:3000/comments/3
```
* Gets all the End Point (JSON response with header)

```bash
    curl -I http://localhost:3000/comments/3
    curl --head http://localhost:3000/comments/3
```
* Gets the header 

```bash
    curl -o fetch.txt http://localhost:3000/albums/5 
    curl --output fetchTwo.txt http://localhost:3000/albums/5 
```
* Fetches the data and output into a file

```bash
    curl -O https://jsonplaceholder.typicode.com/posts
```
* Downloads the data

```bash
    curl -O --limit-rate 1000B https://jsonplaceholder.typicode.com/posts
```
* Downloads the data by limiting the rate

```bash
    curl -d  "title=Demons&body=Rowling" http://localhost:3000/posts
    curl --data "title=Demons&body=Rowling" https://jsonplaceholder.typicode.com/posts
```
* Adds the data using GET method

```bash
    curl -X POST -d  "title=Demons&body=Rowling" http://localhost:3000/posts
    curl -X POST --data "title=Demons" https://jsonplaceholder.typicode.com/posts
```
* Adds the data using POST method

```bash
    curl -X PUT -d "title=Hello" https://jsonplaceholder.typicode.com/posts/3
    curl -X PUT --data "title=Hello" http://localhost:3000/posts/3
```
* Updates data using PUT method

```bash
    curl -X DELETE https://jsonplaceholder.typicode.com/posts/3
```
* Deletes the data using DELETE method [Empty Object Returned back]

```bash
    curl -u photon:1234 DELETE https://jsonplaceholder.typicode.com/posts/3
```
* Deletes the data using DELETE method with authentication

```bash
    curl -L http://google.com 
```
* When the site redirects from http://google.com to http://www.google.com
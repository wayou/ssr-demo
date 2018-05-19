Server side render using headless chrome 
===

### run locally

- install
```bash
$ npm i 
```

- start the server

```bash
$ node server.js
```

- visit `localhost:8080/`

### notes

In `server.js`, make the `public/index.html` public accessily 

```js
app.use(express.static("./"));
```

process `localhost:8080/` to return `public/index.htmtl` throught puppeteer.

see the time cost by ssr in Chrome Devtools.



### reference

- [Headless Chrome: an answer to server-side rendering JS sites](https://developers.google.com/web/tools/puppeteer/articles/ssr)
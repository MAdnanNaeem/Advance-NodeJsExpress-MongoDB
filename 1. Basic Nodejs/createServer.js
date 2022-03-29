
const fs = require("fs");

//! Create a Server

const http = require('http');


//! URL's

const url = require('url');

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {

  const pathName = req.url;

  if (pathName === `/overview`)  {

    res.end(`This is Overview page..`);

  } else if (pathName === `/contact`) {
    
    res.end(`This is Contact Us page..`);
  
  } else if (pathName === `/`) {
   
    res.end(`This is main page..`)

  } else if (pathName === `/api`) {
   
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
    
  }else {
    
    res.writeHead(404, {

      'Content-type': 'text/html'

    });
    
    res.end(`<h1>This page is not found 404 ...</h1>`);

  }

});

server.listen(8000, '127.0.0.1', () => {
  console.log('We are listening from Server at port number 8000 ');
});

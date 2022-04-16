//* Core Modules 

// ! File Object
const fs = require("fs");

//! Create a Server

const http = require('http');


//! URL's

const url = require('url');

const data = fs.readFileSync(`../data.json`, "utf-8");
const dataObj = JSON.parse(data);

const overviewData = fs.readFileSync(`${__dirname}/template-overview.html`,"utf-8");
const productData = fs.readFileSync(`${__dirname}/template-product.html`, 'utf-8');
const cardData = fs.readFileSync(`${__dirname}/template-card.html`, 'utf-8');

//* third-party Modules
const slugify = require('slugify');



//* Own Modules

// ! Calling-Modules

const replaceTemplate = require("./modules/replaceTemplate");

//* Slugs

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slugs);



//* Creating a Server 

const server = http.createServer((req, res) => {

  const {query, pathname } = url.parse(req.url,true);


  if (pathname === `/overview` || pathname === '/')  {

    res.writeHead(200, {'Content-type': 'text/html'});

    const cards = dataObj.map(el => replaceTemplate(cardData, el)).join('');
    const output = overviewData.replace('{%PRODUCT_CARDS%}', cards);
    res.end(output);

  } else if (pathname === `/product`) {

    const product = dataObj[query.id];
    res.writeHead(200, { "Content-type": "text/html" });
    const output = replaceTemplate(productData, product)
    res.end(output);
  
  } else if (pathname === `/api`) {
   
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
    
  }else {
    
    res.writeHead(404, {

      'Content-type': 'text/html'

    });
    
    res.end(`<h1>This page is not found 404 ...</h1>`);

  }

});

server.listen(8000, '127.0.0.2', () => {
  console.log('Adnan ! Server is running.. :)');
});

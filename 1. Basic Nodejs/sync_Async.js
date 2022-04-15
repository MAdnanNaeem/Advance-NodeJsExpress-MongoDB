//! Read and Write from File Using Blocking/Sync method

const fs = require('fs');

// const textRead = fs.readFileSync(`./test.txt`, `utf-8`);

// console.log(textRead);

// const textWrite = ` ${textRead}, Hazoor aa Jaye !! ${Date.now()}`;
// fs.writeFileSync('./test.txt', textWrite);

//  console.log(textWrite);

//! Read and Write from File Using Non-blocking/ Async method

// 3rd parameter will be the callback func with 2 parameters err, data / or any other name but this should be 2nd param 
 fs.readFile('./async.txt','utf-8', (err,data1) => {                                                     //* This 
   if (err) return console.log('ERROR !!');
   fs.readFile(`./test.txt`, "utf-8", (err, data2) => {                                                  //* is
    //  console.log(data2);

     fs.readFile('./append.txt', 'utf-8', (err, data3) => {                                              //* Known 
      //  console.log(data3);

       fs.writeFile('./final.txt',`This is final txt file.\n ${data2} \n ${data3}`, 'utf-8', err => {    //* as
         console.log(`File has been written sucessfully :) !!`);                                         //* Call-Back Hell 
       } )
     })
   })

});

console.log(` This will going to execute first`);



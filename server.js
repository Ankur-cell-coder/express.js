const express = require('express'); //importing express
//this returns a function , that functions gives us an object and we can apply all of our 
//functions to that objects.

//importing path module to generate proper path
const path = require('path');

const app = express();//calling express.
// app is that objects
//creating a server

//app.listen(3300);//3300 is port no. // first functions.
// passing a callback to listen functions
// app.listen(3000, () => {
//    console.log('Listening on port 3000');
// });


//may be port number 3000 is not available then run on that port which is given by environment

//importing router file
const mainRouter = require('./routes/index');

const PORT = process.env.port || 3300 ;

//to set ejs as templating enjine
app.set('view engine','ejs');


//static middleware to server static file
app.use(express.static('public'));

//using router
app.use(mainRouter);

/*
//this is for home page we can create any page like this
app.get('/',(req,res) => {
  //  res.send("<h1>Hello from express</h1>");
  //sending a file
  res.render('index',{
    title:'MY home page'
  });
})

//about page
app.get('/about',(req,res) => {
   // res.sendFile(path.resolve(__dirname)+'/about.html');
   res.render('about',{
     title:'MY about page'
   });
  })

*
//to download any file
app.get('/download',(req,res) =>{
  res.download(path.resolve(__dirname)+'/about.html');
})

*/


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
 });



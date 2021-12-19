//create router
//for creating router firstly we have to import that router

//importing router
//for getting router just we have to require express which contain Router and then call Router
const router = require('express').Router();


router.get('/',(req,res) => {
    res.render('index',{
      title:'MY home page'
    });
  });

router.get('/about',(req,res) => {
    // res.sendFile(path.resolve(__dirname)+'/about.html');
    res.render('about',{
      title:'MY about page'
    });
})

router.get('/download',(req,res) =>{
    res.download(path.resolve(__dirname)+'/about.html');
  })


//exporting router
module.exports = router;
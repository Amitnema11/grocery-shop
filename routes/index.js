var express = require('express');
var router = express.Router();
const Item =require("../models/userModel")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register');
});


router.get('/show',async function(req, res, next) {
  try{
    const product=await Item.find()
    res.render('products' , {product});
  }catch(err){
    res.send(err)
  }
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.post('/register', function(req, res, next) {
  // tasks.push(req.body)
  Item.create(req.body)
  .then(()=>{
    res.redirect('/show');
  })
  .catch((err)=>{
    console.log(err)
  })
});


router.get('/delete/:id',async function(req, res, next) {
  try{
   await Item.findByIdAndDelete(req.params.id)
      res.redirect("/show")
  }
  catch(err){
    res.send(err)
  }
});

router.get('/update/:id',async function(req, res, next) {
try{
  const items=await Item.findById(req.params.id)
  res.render("update", {items})
}
catch(err){
  res.send(err)
}

  });

  router.post('/update/:id',async function(req, res, next) {
    try{
      await Item.findByIdAndUpdate(req.params.id,req.body)
      res.redirect("/show")   
    }
    catch(err){
      res.send(err)
    }
     });
   
module.exports = router;

const express = require('express')
const router = express.Router() 
const path = require('path')
const fs = require('fs')
const multer = require('multer')
let Livestock = require('../models/livestock.model')

// multer storage
const storage= multer.diskStorage({
    destination:(req, file,cb)=>{
        cb(null,'./uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + "_"+ file.originalname)
    }
})
const upload = multer({storage: storage}).single('image');

 
 //fetching  livestock
 router.get('/read',(req,res)=>{
        Livestock.find().exec((err,livestock)=>{
            if(err){
                res.json({message:err.message})
            }else{
                res.send(livestock);
            }
        })
           
 });
     
   //insert livestock Livestock
  router.post('/add',upload,(req,res)=>{
     const livestock = new Livestock({
        category:req.body.category,
        image:req.files.file,
        age:req.body.age,
        sex:req.body.sex,
        siblings:req.body.siblings,
        parents:req.body.parents,
        offsprings:req.body.offsprings,

     })
     livestock.save()
     .then(()=> res.json('Livestock Added!'))
     .catch(err => res.status(400).json('Error' + err))

  })
  //Updating livestock info
  router.route('/update/:id').post((req,res)=>{
     Livestock.findById(req.params.id)
     .then(livestock =>{
          livestock.category=req.body.category;
        livestock.image=req.file.filename;
          livestock.age=req.body.age;
          livestock.sex=req.body.sex;
          livestock.siblings=req.body.siblings;
          livestock.parents=req.body.parents;
          livestock.offsprings=req.body.offsprings;
 
         livestock.save()
         .then(()=> res.json('Livestock Info updated!'))
         .catch(err => res.status(400).json('Error' + err))
     })
     .catch(err=>res.status(400).json('Error' + err))
 
 })
   
 
 
 module.exports = router;


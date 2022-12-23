const router =require('express').Router();
const Earning = require('../models/earnings.model')

//fetching  earning
router.route('/read').get(async (req,res)=>{
    Earning.find({},(err,result)=>{
      if(err){
        res.send(err)
      }
      res.send(result)
    })
        
  });
  //adding  earning
  router.route('/add').post((req,res)=>{
    const source = req.body.source;
    const amount = req.body.amount;
    const from= req.body.from;    
    const recievedby = req.body.recievedby;
    const status = req.body.status;  
    
    const newEarning = new Earning({  
          source,
          amount,
          from,
          recievedby,
          status,

        });
    
        newEarning.save()
        .then(()=> res.json('Earning Recorded!'))
        .catch(err => res.status(400).json('Error' + err))
 })
 //update earnings
 router.route('/update/:id').post((req,res)=>{
    Earning.findById(req.params.id)
    .then(earning =>{
        earning.source = req.body.source;
        earning.amount = req.body.amount;
        earning.from= req.body.from;    
        earning.recievedby= req.body.recievedby;
        earning.status = req.body.status;  

        earning.save()
        .then(()=> res.json('Earning info updated!'))
        .catch(err => res.status(400).json('Error' + err))
    })
    .catch(err=>res.status(400).json('Error' + err))

})
  


module.exports = router;
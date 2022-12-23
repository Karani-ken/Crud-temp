const router =require('express').Router();
let Asset = require('../models/asset.model')

//fetching  assets
router.route('/read').get( async(req,res)=>{
    Asset.find({},(err,result)=>{
        if (err){
            res.send(err)
        }
        res.send(result);  
    })
         
  });
  //adding an asset
  router.route('/add').post((req,res)=>{
    const assetname = req.body.assetname;
    const assetcategory = req.body.assetcategory;
    const assetdescription = req.body.assetdescription;    
    const assetcost = req.body.assetcost;
    const assetrecieptno = req.body.assetrecieptno;  
    
    const newAsset = new Asset({  
            assetname,
            assetcategory,
            assetdescription,   
            assetcost,
            assetrecieptno,
        });
    
        newAsset.save()
        .then(()=> res.json('Asset Added!'))
        .catch(err => res.status(400).json('Error' + err))
 })
 router.route('/update/:id').post((req,res)=>{
    Asset.findById(req.params.id)
    .then(asset =>{
         asset.assetname = req.body.assetname;
         asset.assetcategory= req.body.assetcategory;
         asset.assetdescription=req.body.assetdescription;
         asset.assetcost=req.body.assetcost;
         asset.assetrecieptno=req.body.assetrecieptno;

        asset.save()
        .then(()=> res.json('Asset Info updated!'))
        .catch(err => res.status(400).json('Error' + err))
    })
    .catch(err=>res.status(400).json('Error' + err))

})
  


module.exports = router;
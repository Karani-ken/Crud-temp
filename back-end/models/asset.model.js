const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const assetSchema = new Schema({
    assetname:{
        type:String,
        required:true,
        trim:true,
    },
    assetcategory:{
        type:String,
        required:true,
        trim:true,
    },
    assetdescription:{
        type:String,
        required:true,
        trim:true,
        min:3,
    },
    assetcost:{
        type:Number,
        required:true,
    },
    assetrecieptno:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
})

const Asset = mongoose.model('Asset', assetSchema);
module.exports = Asset;
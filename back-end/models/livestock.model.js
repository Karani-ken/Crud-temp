const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const livestockSchema = new Schema({
    category:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
        trim:true,
    },
    sex:{
        type:String,
        required:true,
        trim:true,
        min:3,
    },
    siblings:{
        type:Number,
        required:true,
    },
    parents:{
        type:Number,
        required:true,
    },
    offsprings:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
})

const Livestock = mongoose.model('Livestock', livestockSchema);
module.exports = Livestock;
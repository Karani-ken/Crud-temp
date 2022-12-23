const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const earningSchema = new Schema({
    source:{
        type:String,
        required:true,
        trim:true,
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
    },
    from:{
        type:String,
        required:true,
        trim:true,
        min:3,
    },
    recievedby:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

const Earning = mongoose.model('Earning', earningSchema);
module.exports = Earning;
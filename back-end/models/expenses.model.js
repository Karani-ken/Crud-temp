const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const expenseSchema = new Schema({
    expense:{
        type:String,
        required:true,
        trim:true,
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
    },
    paidby:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
const router =require('express').Router();
const Expense = require('../models/expenses.model')

//fetching  Expenses
router.route('/read').get(async (req,res)=>{
    Expense.find({},(err, result)=>{
      if(err){
        res.send(err);
      }
      res.send(result);
    })
        
  });
  //adding  expenses
  router.route('/add').post((req,res)=>{
    const expense= req.body.expense; 
    const amount = req.body.amount;       
    const paidby= req.body.paidby;
 
    
    const newExpense = new Expense({  
          expense,
          amount,
          paidby,
        });
    
        newExpense.save()
        .then(()=> res.json('Expenses Recorded!'))
        .catch(err => res.status(400).json('Error' + err))
 })
 //update expense
 router.route('/update/:id').post((req,res)=>{
    Expense.findById(req.params.id)
    .then(expense =>{
        expense.expense = req.body.expense;
        expense.amount = req.body.amount;
        expense.paidby= req.body.paidby;      

        expense.save()
        .then(()=> res.json('Expense info updated!'))
        .catch(err => res.status(400).json('Error' + err))
    })
    .catch(err=>res.status(400).json('Error' + err))

})
module.exports = router;
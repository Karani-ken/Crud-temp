import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AddExpenditures = () => {
  const url = 'http://localhost:5000/expenses/add'
  const [Expense, setExpense]= useState('')
  const [Amount, setAmount]=useState('')
  const [PaidBy, setPaidBy]= useState('')
  const [Message, setMessage]=useState('')

  const AddExpense=(e)=>{
    e.preventDefault();
    const expense={
      expense:Expense,
      amount:Amount,
      paidby:PaidBy,
    }
    console.log(expense)
    axios.post(`${url}`,expense)
    .then(res=>{
      console.log(res.data)
      setMessage('Recorded Successfuly')
    })

  }
  return (
    <div className='bg-emerald-700 min-h-screen flex items-center justify-center'>
    <div className=" flex items-center justify-center bg-emerald-500 shadow-2xl shadow-white ">
    <form className='border-2 border-gray-100 h-[500px] w-[300px] text-center items-center justify-center rounded-3xl'>
            <span className='mt-6'>
                <h1 className="text-black font-black">Add Expense</h1>
                <p className='text-xl bg-rose-400 rounded-lg'>{Message}</p>
                <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                    <input type='text' placeholder='Expense' className='rounded text-center' onChange={(e)=>setExpense(e.target.value)} />
                    <input type='text' placeholder='Amount' className='rounded text-center' onChange={(e)=>setAmount(e.target.value)} />
                    <input type='text' placeholder='Paid by' className='rounded text-center' onChange={(e) => setPaidBy(e.target.value)} />
                </div>
                <div className="m-3 flex items-center justify-center">
                    <button onClick={AddExpense} className='border-2 rounded border-white mx-6 bg-emerald-700 text-white w-24 hover:text-black hover:border-emerald-700 hover:bg-white'>Add</button>
                    <Link to='/expenditures' className='border-2 rounded border-white mx-6 bg-red-700 text-white w-24 hover:text-black hover:border-red-700 hover:bg-white'>back</Link>
                </div>
            </span>
           

    </form>
    </div>
   

</div>
  )
}

export default AddExpenditures
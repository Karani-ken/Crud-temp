import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AddEarnings = () => {
  const url = 'http://localhost:5000/earnings/add'
  const [Source, setSource] = useState('')
  const [Amount, setAmount] = useState('')
  const [From, setFrom] = useState('')
  const [RecievedBy, setRecievedBy] = useState('')
  const [Status,setStatus] = useState('')
  const [Message, setMessage]= useState('')

  const RecordEarnings=(e)=>{
    e.preventDefault();

    const earning={
      source:Source,
      amount:Amount,
      from:From,
      recievedby:RecievedBy,
      status:Status
    }
    console.log(earning)
    axios.post(`${url}`, earning)
    .then(res =>{
      console.log(res.data)
      setMessage('Recorded successfuly')
    
    })
  }
  return (
    <div className='bg-emerald-700 min-h-screen flex items-center justify-center'>
    <div className=" flex items-center justify-center bg-emerald-500 shadow-2xl shadow-white ">
    <form className='border-2 border-gray-100 h-[500px] w-[300px] text-center items-center justify-center rounded-3xl'>
            <span className='mt-6'>
                <h1 className="text-black font-black">Record Earnings</h1>
                <p className='text-xl bg-rose-400 rounded-lg'>{Message}</p>
                <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                    <input type='text' placeholder='Source' className='rounded text-center' onChange={(e)=>setSource(e.target.value)} />
                    <input type='text' placeholder='Amount' className='rounded text-center'onChange={(e)=>setAmount(e.target.value)} />
                    <input type='text' placeholder='From' className='rounded text-center' onChange={(e)=>setFrom(e.target.value)} />
                    <input type='text' placeholder='recieved by' className='rounded text-center' onChange={(e)=>setRecievedBy(e.target.value)} />
                    <input type='text' placeholder='Status' className='rounded text-center' onChange={(e)=>setStatus(e.target.value)}/>
                </div>
                <div className="m-3 flex items-center justify-center">
                    <button onClick={RecordEarnings} className='border-2 rounded border-white mx-6 bg-emerald-700 text-white w-24 hover:text-black hover:border-emerald-700 hover:bg-white'>Add</button>
                    <Link to='/earnings' className='border-2 rounded border-white mx-6 bg-red-700 text-white w-24 hover:text-black hover:border-red-700 hover:bg-white'>back</Link>
                </div>
            </span>
           

    </form>
    </div>
   

</div>
  )
}

export default AddEarnings
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AddAnimal = (props) => {
  const url='http://localhost:5000/livestock/add'
  const [Category,setCategory]=useState('')
  const [file, setfile]=useState('')
  const [Age,setAge]=useState('')
  const [Sex, setSex]=useState('')
  const [Siblings, setSiblings]=useState('')
  const [Parents, setParents]=useState('')
  const [Offsprings, setOffspings]=useState('')
  const [Message, setMessage]=useState('')

  const AddAnimal=(e)=>{
    e.preventDefault();
    const livestock={
      category:Category,
      age:Age,
      sex:Sex,
      siblings:Siblings,
      parents:Parents,
      offsprings:Offsprings
    }
   

      axios.post(`${url}` + livestock)
      .then(res=>{
       
        setMessage('Added Successfully')
        console.log(livestock)
      })
    
      
  }


  return (
    <div className='bg-emerald-700 min-h-screen flex items-center justify-center'>
        <div className=" flex items-center justify-center bg-emerald-500 shadow-2xl shadow-white">
        <form className='border-2 border-gray-100 h-[500px] w-[300px] text-center  items-center justify-center rounded-3xl'>
                <span className='mt-6'>
                    <h1 className="text-black font-black">Add animal</h1>
                    <p className='text-xl bg-rose-400 rounded-lg'>{Message}</p>
                    <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                        <input type='text' placeholder='Animal category' className='rounded text-center' onChange={(e)=>setCategory(e.target.value)} />
                        <input type="file" name="file" id='customFile' className='rounded text-center cursor-pointer' onChange={(e)=>setfile(e.target.files[0])} />
                        <input type='text' placeholder='Age' className='rounded text-center' onChange={(e)=>setAge(e.target.value)} />
                        <input type='text' placeholder='Sex' className='rounded text-center'  onChange={(e)=>setSex(e.target.value)} />
                        <input type='text' placeholder='siblings' className='rounded text-center'  onChange={(e)=>setSiblings(e.target.value)}/>
                        <input type='text' placeholder='Parent' className='rounded text-center' onChange={(e)=>setParents(e.target.value)} />
                        <input type='text' placeholder='Offsprings' className='rounded text-center' onChange={(e)=>setOffspings(e.target.value)} />
                    </div>
                    <div className="m-3 flex items-center justify-center">
                        <button onClick={AddAnimal} className='border-2 rounded border-white mx-6 bg-emerald-700 text-white w-24 hover:text-black hover:border-emerald-700 hover:bg-white'>Add</button>
                        <Link to='/overview' className='border-2 rounded border-white mx-6 bg-red-700 text-white w-24 hover:text-black hover:border-red-700 hover:bg-white'>back</Link>
                    </div>
                </span>
               

        </form>
        </div>
       

    </div>
  )
}

export default AddAnimal
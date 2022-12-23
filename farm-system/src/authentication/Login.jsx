import React from 'react'
import { useState } from 'react'
import { Link,} from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  
 
  const [data, setData] =useState({
    email:"",
    password:""
  })
  const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:input.value})
  }
  const [Error, setError] = useState('')
  const handleSubmit= async(e)=>{
    e.preventDefault();
      try{
        const url = 'http://localhost:8080/auth/';
        const {data: res} = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        window.location = "/";
      }catch(error){
        if(error.response && error.response.status >= 400 &&
          error.response.status <=500){
              setError(error.response.data.message)
          }
      }
  }

  return (
    <div className='bg-emerald-700 min-h-screen flex items-center justify-center'>
        <div className=" flex items-center justify-center bg-emerald-500 shadow-md shadow-gray-900 ">
        <form className='border-2 border-gray-100 h-[500px] w-[300px] text-center items-center justify-center rounded-3xl' onSubmit={handleSubmit}>
                <span className='mt-6 '>
                   {Error && <p className='text-xl bg-rose-400 rounded-lg'>{Error}</p>}
                    <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                        <input type='email' placeholder='Email' name='email' required value={data.email} className='rounded text-center' onChange={handleChange} />
                        <input type='password' placeholder='Password' name='password' required value={data.password} className='rounded text-center' onChange={handleChange} />
                    </div>
                    <h1 className="text-blue font-black">New here?</h1>
                    <div className="m-3 flex items-center justify-center">
                    <Link to='/signup' className='border-2 rounded
                         border-white mx-6
                         bg-red-700 text-white w-24
                         hover:text-black hover:border-red-700
                          hover:bg-white'>
                            Sign up
                        </Link>
                        <button type='submit' className='border-2 rounded border-white
                         mx-6 bg-emerald-700 text-white w-24 hover:text-black
                          hover:border-emerald-700 hover:bg-white'
                        >
                            Login
                        </button>
                        
                    </div>
                </span>
               

        </form>
        </div>
       

    </div>
  )
}

export default SignUp
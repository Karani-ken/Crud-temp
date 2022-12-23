import React from 'react'
import FarmProfilepic from '../../utils/images/images'
import axios from 'axios'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'

const FarmProfile = () => {
 

  const GetUserData =()=>{
   
    
  }
  
  useEffect((id)=>{
    GetUserData();
  },[]);
  return (
    <div className='flex flex-col items-start justify-start h-screen bg-emerald-200'>
              <Link to='/' className='bg-emerald-400 rounded border-2 hover:bg-emerald-200
              flex items-start justify-start hover:border-rose-400 text-center '>

                  <Icons.ArrowBarLeft className='m-2'/>
                  <h1 className='underlined m-2 text-sm'>go to dashboard</h1>
            </Link>
            <div className=' bg-emerald-700 md:bg-emerald-500 w-full flex items-center justify-center border-b-2 border-gray-200 rounded-lg'>
             
                <div className='m-10 flex justify-center items-center flex-col '>
                    <img src={ FarmProfilepic} alt=''
                     className='rounded-[100%] w-[150px] h-[150px] mb-5'/>

                    <span className='border-2 bg-emerald-500 rounded hover:bg-black '>
                    <Link to='/editfarm' className='flex flex-row items-start justify-start'>
                    <Icons.Pencil className='text-white'/>
                    <h2 className='text-white text-xl m-2'>Edit profile</h2>          
                    </Link>
                    
                    </span> 
                </div>
            </div>
            <div className='bg-emerald-700 w-full text-center h-full '>
              <h1 className='font-bold md:text-2xl'>Nairutia Farm ltd.</h1>
              <div className='bg-emerald-400 grid grid-cols-2 rounded-lg gap-3 md:gap-5 flex 
              m-3 p-3 justify-center items-center md:p-12 md:m-12'>
                <span className='text-left ml-4 mt-2 font-bold'>
                  <h2>Farm Name:</h2>
                  <h2>Owner:</h2>
                  <h2>Location:</h2>
                  
                </span>
                <span className='text-left ml-4 mt-2 md:font-medium'>
                  <h2>Nairutia farm ltd.</h2>
                  <h2>Old Man of koreo</h2>
                  <h2>Nirutia</h2>
                  
                </span>

              </div>
                
            </div>
    </div>
  )
}

export default FarmProfile
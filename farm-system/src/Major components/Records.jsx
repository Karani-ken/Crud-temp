import React from 'react'
import { Link } from 'react-router-dom'
import Records_Data from '../utils/records.json'
const Records = () => {
  return (
    <div className='text-center p-10 md:h-screen w-full bg-emerald-500'>
        <h1 className='text-3xl font-san italic md: font-black py-6 my-6'>Records</h1>
        <p className='text-2xl my-5'>Click card to view record</p>
        <div className=' grid grid-col-1 md:grid-cols-3 gap-24 flex items-center justify-center '>            
            {
                Records_Data && Records_Data.map((data)=>
                    <Link to={data.path}>
                      <div key={data.id} className='bg-emerald-900 rounded-lg text-center h-50 w-48 md:w-full h-full shadow-2xl shadow-gray-900 text-white hover:bg-emerald-500'>
                            <img src={data.image} alt='' className=' h-36  md:h-60 w-full rounded-2xl'/>
                            <h2 className='font-black text-xl m-3 md:font-black text-2xl'>{data.title}</h2>
                        

                        </div>
                    </Link>
                  
                )
            }
        </div>
    </div>
  )
}

export default Records
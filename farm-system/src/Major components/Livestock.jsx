import React from 'react'
import Image from '../utils/images/livestock1.jpg'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
const Livestock = () => {
  return (
    <div className='w-full bg-emerald-700  text-center'>
         <Link to='/overview' className='bg-emerald-400 rounded border-2 hover:bg-gray-100
              flex items-start justify-start hover:border-rose-400 text-center w-[100px]'>

                  <Icons.ArrowBarLeft className='m-2'/>
                  <h1 className='underlined m-2 text-sm'>go to animals</h1>
            </Link>
        <h1 className='font-black text-2xl italic mb-5'>Animal profile</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 flex flex-row items-start justify-start w-full'>
            <div className=' flex flex-col bg-emerald-200 px-6 mx-6 my-3 shadow-lg shadow-gray-900'>
                <span className='text-center shadow-lg shadow-gray-900 h-[350px] mt-4 flex flex-col items-center justify-center'>
                    
                    <img src={Image} alt="" className='w-[250px] md:w-[400px] p-5'/>
                    
                    <h1 className='text-xl md:font-black text-2xl m-4'>Livestock X</h1>
                </span>
                <hr className='h-1 bg-gray-900 rounded-lg'/>
                <div className='md:flex hidden space-x-3 p-6'>
                    <span>
                        <img src={Image} alt="" className='w-48 p-5 shadow-lg shadow-gray-900'/>
                    </span>
                    <span>
                        <img src={Image} alt="" className='w-48 p-5 shadow-lg shadow-gray-900'/>
                    </span>
                    <span>
                        <img src={Image} alt="" className='w-48 p-5 shadow-lg shadow-gray-900'/>
                    </span>
                </div>
                
            </div>
            <div className='bg-emerald-300 my-3 mx-6 text-center rounded-xl shadow-lg shadow-gray-900'>
                    <h1 className='text-xl md:font-black text-2xl'>
                        Animal Bio
                    </h1>
                <div className=' bg-emerald-900 text-white rounded-lg grid grid-cols-2 gap-5 '>
                    
                    <span className='text-left ml-6 mt-3 mb-3 font-bold'>
                        
                            <h2>Animal Id:</h2>
                            <h2>Category:</h2>
                            <h2>No. Siblings:</h2>
                            <h2>No. Offspings:</h2>
                            <h2>Parents:</h2>
                            <h2>Age:</h2>
                        
                    </span>
                    
                    <span className='text-left ml-6 mt-3 mb-3 font-medium'>
                        
                            <h2>0198</h2>
                            <h2>Cow</h2>
                            <h2>None</h2>
                            <h2>2</h2>                            
                            <h2> <a href="" className='text-blue-500 hover:underline'>P2023</a> </h2>{/* link to the parent profile*/}
                            <h2>3 months</h2>
                        
                    </span>

                </div>
                <div className='bg-emerald-500 rounded-xl text-white text-center py-6 items-center justify-center'>
                            <h1 className='text-black font-black'>Vet Appointments</h1>
                    <div className='bg-emerald-200 flex  items-center justify-center rounded-2xl'>
                        <div className='flex flex-col gap-5'>
                            <div className='max-w-lg rounded-lg mt-3 mb-3 bg-green-100 text-green-700 overflow-hidden shadow-md shadow-green-600'>
                                <div className='flex'>
                                    <div className='flex items-center gap-4 p-4'>
                                        <div className='shrink-0'>
                                            <Icons.Check/>
                                            <div className='space-y-1'>
                                                <p className='font-bold capitalize'>Previous Appointment</p>
                                                <p className='text-sm' >18-04-2022</p>
                                                <div>
                                                    <a href="" className="text-sm tracking-wide hover:underline">See Details</a>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </div>

                                </div>
                                
                            </div>
                            <div className='max-w-lg rounded-lg mt-3 mb-3 bg-rose-300 text-green-700 overflow-hidden shadow-md shadow-rose-600'>
                                <div className='flex'>
                                    <div className='flex items-center gap-4 p-4'>
                                        <div className='shrink-0'>
                                            <Icons.Alarm/>
                                            <div className='space-y-1'>
                                                <p className='font-bold capitalize'>Next Appointment</p>
                                                <p className='text-sm' >18-06-2022</p>
                                                <div>
                                                    <a href="" className="text-sm tracking-wide hover:underline">See Details</a>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default Livestock
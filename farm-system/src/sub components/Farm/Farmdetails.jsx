import React from 'react'
import { Link } from 'react-router-dom'
const Farmdetails = () => {
  return (
    <div className='bg-emerald-700 min-h-screen flex items-center justify-center'>
        <div className=" flex items-center justify-center bg-emerald-500 shadow-md shadow-gray-900 ">
        <form className='border-2 border-gray-100 h-[500px] w-[300px] text-center items-center justify-center rounded-3xl'>
                <span className='mt-6 '>
                    <h1 className="text-black font-black">Edit Profile</h1>
                    <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                        <input type='text' placeholder='farm name' className='rounded text-center' />
                        <input type="file" className='rounded text-center cursor-pointer' />
                        <input type='text' placeholder='owner' className='rounded text-center' />
                        <input type='text' placeholder='Location' className='rounded text-center' />
                        <input type='text' placeholder='Farm id' className='rounded text-center' />
                    </div>
                    <div className="m-3 flex items-center justify-center">
                        <a href="#" className='border-2 rounded border-white
                         mx-6 bg-emerald-700 text-white w-24 hover:text-black
                          hover:border-emerald-700 hover:bg-white'>
                            Save
                        </a>
                        <Link to='/farmprofile' className='border-2 rounded
                         border-white mx-6
                         bg-red-700 text-white w-24
                         hover:text-black hover:border-red-700
                          hover:bg-white'>
                            Cancel
                        </Link>
                    </div>
                </span>
               

        </form>
        </div>
       

    </div>
  )
}

export default Farmdetails
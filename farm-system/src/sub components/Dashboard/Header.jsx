import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import FarmProfile from '../Farm/FarmProfile'
const Header = () => {
  return (
    <div className='bg-emerald-300 w-full py-6 md:items-center
    md:justify-between flex flex-col px-6 md:px-12 items-start justify-start'>
        {/*search*/}
        <div className='w-full lg:flex hidden space-x-4 items-center
        justify-start py-2'>
            {/* icon*/}
            <Icons.Search/>
            <input type='text' placeholder='search anything'
            className='bg-transparent outline-none rounded-lg'/>
        </div>
        {/*Logo*/}
        
       <div>
        </div> 
          <Link to='/' className='items-center w-full justify-center
        flex space-x-4'>
             <Icons.BriefcaseFill/>
             <h1 className=' font-white md:text-gray-900 font-medium'>Farm Management System</h1>  
          </Link>

            <div className='border-2 border-gray w-full md:hidden'/>       
      
        <div className='items-center justify-end 
        space-x-6 flex w-full py-3 md:py-0'>
           
            <Link to="/farmprofile">
                <Icons.PersonFill/>
                <h1>Profile</h1>
            </Link>
            <Link to="/login">
                <Icons.PersonAdd/>
                <h1>Login</h1>
            </Link>
           
        </div>
    </div>
  )
}

export default Header
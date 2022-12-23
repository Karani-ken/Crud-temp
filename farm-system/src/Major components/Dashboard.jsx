import React from 'react'
import Left from '../sub components/Dashboard/Left'
import Navbar from '../sub components/Dashboard/Navbar'
import Right from '../sub components/Dashboard/Right'
import Records from './Records'

const Dashboard = () => {
  return (
    <div className='App overflow-y-hidden'>
        
        <div className='w-full min-h-[90vh] grid grid-cols-6 md:grid-cols-12 bg-emerald-100'>
            <Navbar/>
            <div className='grid grid-cols-1 md:grid-cols-5 w-full col-span-10'>
                {/*left part*/}
                <Left/>
                {/*right part*/}
                <Right/>
            </div>
            
        </div>
        <Records/>
    </div>
  )
}

export default Dashboard
import axios from 'axios'
import React from 'react'
import { useState ,useEffect} from 'react'
import { Earnings_Data } from '../../utils/Earnings_Data'
import Earnings from './Earnings'

const Left = () => {
    const [Owner, setOwner]=useState('')
    const [Farmname, setFarmname]=useState('')
    const url='http://localhost:5000/'


  return (
    <div className='col-span-2 min-h-[90vh] border-r border-feay-200 items-start
    justify-start flex flex-col w-full'>
        {/*top section*/}
        <div className='w-full items-start justify-start flex flex-col px-2 pt-2 pb-2 md:px-12 md:pt-12 md:pb-6 ' >
                <h1 className='font-bold text-xl md:text-2xl md:pb-2 '>My Earnings</h1>
                <p className='text-md'>Find all your Earnings here</p>
            <div className='items-start justify-start flex flex-col px-6 pt-8 pb-4 bg-emerald-500 mt-6 w-full rounded-lg shadow-2xl shadow-emerald-200'>
                <h1 className='text-1xl font-black'>Farm X</h1>
                <h1 className=' text-sm  font-black py-2 md:text-3xl  md:font-bold md:py-6'>Kes.90,500.00</h1>
            </div>
            <div className='bg-emerald-900 py-2 md:py-4 px-4 md:px-8 w-full items-center justify-center flex rounded-lg shadow-2xl shadow-emerald-200'>
                    <span className='flex flex-col items-center justify-center text-center text-white'>
                        <h1 className='sm:font-sm font-black'>Owner</h1>
                        <p >James Maina</p>
                    </span>
                
            </div>

        </div>
        {/*Bottom part*/}
        <div className='w-full items-start justify-start flex flex-col px-12 py-6'>
                <h1 className='font-bold text-xl xl:text-2xl pb-2'>
                    Recent Earnings
                </h1>
                <div className='w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hidden'>
                    {
                       Earnings_Data.map((item)=>(
                        <Earnings item={item} key={item.id}/>
                       )
                       
                       ) 
                    }
                </div>
        </div>
       
    </div>
  )
}

export default Left
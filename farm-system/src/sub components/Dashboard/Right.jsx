import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import Chart from './Chart'
import { Earnings_Data } from '../../utils/Earnings_Data'
import Portfolio from './Portfolio'
const Right = () => {
  return (
    <div className='col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6'>
        {/*top section*/}
        <div className='md:flex items-center justify-center w-full lg:space-y-0 px-12' >
          <div className='space-y-6 w-full items-center justify-center flex flex-col'>
            <span className='py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center'>
                <Icons.Cash className='w-8 h-8 stroke-1'/>
            </span>
            <span className='items-center justify-center flex flex-col'>
                <h2>Available Money</h2>
                <h2 className='font-bold text-xl'>Kes.13,000.55</h2>
            </span>
          </div>
          <div className='space-y-6 w-full items-center justify-center flex flex-col'>
            <span className='py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center'>
                <Icons.Wallet2 className='w-8 h-8 stroke-1'/>
            </span>
            <span className='items-center justify-center flex flex-col'>
                <h2>Pending Payments</h2>
                <h2 className='font-bold text-xl'>Kes.3,000.90</h2>
            </span>
          </div>
          <div className='bg-emerald-900 pt-6 items-center justify-between flex flex-col w-full rounded-lg shadow-lg shadow-sky-900'>
              <span className='items-center justify-center flex flex-col py-6'>
                <h3 className='text-white'>Total Amount</h3>
                <h1 className='text-white font-bold text-xl 2xl:text-3xl'>
                  Kes.300,000.00
                </h1>
              </span>
              <div className='bg-emerald-500 items-center justify-center flex text-white w-full py-2'>
                <h1>Monthly Earnings</h1>
              </div>
          </div>
        </div>
        <div className='border-t border-gray-200 w-full my-4'/>
        {/*chart*/}
        <div className='w-full items-start justify-start flex flex-col px-12 py-2'>
              <h1 className='text-xl font-bold xl:text-3xl'>
                Sales progress
              </h1>
            <Chart/>
        </div>
        {/*bottom section*/}
        <div className='w-full items-start justify-start flex flex-col px-12 py-6'>
          <h1 className='text-xl font-bold xl:text-3xl py-4'>
              My Commodities
          </h1>
          <div className='flex items-center justify-center space-x-6 overflow-x-auto w-full py-4'>
              {
                Earnings_Data.map((item)=>(
                  <Portfolio item={item} key={item.id}/>
                ))
              }
          </div>
        </div>
    </div>
  )
}

export default Right
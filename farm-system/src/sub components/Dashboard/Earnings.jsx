import React from 'react'

function Earnings ({item}){
    const {title, desc, icon, upOrDown, percent, price}=item; //destructuring props
  return (
    <div className='w-full py-2 px-2 items-center justify-between flex'>
        {/*Icontext*/}
        <div className='bg-[#DBEEF4] flex items-center justify-center space-x-4 w-full'>
            <span>{icon}</span>
        </div>
        <div className='w-full space-y-1'>
            <h1 className='font-bold'>{title}</h1>
            <p className='text-sm'>{desc}</p>
        </div>
        {/*price + percent*/}
        <div className='w-full items-end justify-end flex flex-col'>
            <h1 className='font-bold'>Kes.{price}</h1>
            <p 
            className={`${upOrDown === "up" ? "text-green-400":"text-red-400"}`}
            >{percent}
            </p>
        </div>
    </div>
  )
}

export default Earnings
import React from 'react'
import Image_data from '../utils/images/constatnts.json'
const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'
function Home() {
  return (
    <div className='mx-10 h-screen'>
        <div className=' flex justify-evenly p-10'  >
            <h1 className='text-5xl font-sans font-black text-white p-10 italic'>FMS</h1>
            <ul className='list-none flex justify-evenly m-4 text-white'>
                <li><a href='' className='text-2xl m-10 '>Home</a></li>
                <li><a href='' className='text-2xl m-10 '>Livestock</a></li>
                <li><a href='' className='text-2xl m-10 '>Records</a></li>
                <li><a href='' className='text-2xl m-10 '>Overview</a></li>
            </ul>
            <div className='block  text-center'>
            <img src={url} alt='' className='h-20 w-20'/>
            <h3 className='text-2xl md: text-xl text-white'>Farm x</h3>
            </div>
            
        </div>
       
        <div className='grid lg:grid-cols-3 gap-36 m-10'>
        {
            Image_data && Image_data.map((item) =>
                <div key={item.id} className='m-5 bg-sky-500 rounded-2xl text-center'>
                    <img src={item.image} alt='' className='h-60 w-72 rounded-2xl '/>
                    <h2 className='text-3xl m-3 font-bold text-white'>{item.title}</h2>

                </div>
            )
        }
        </div>
        
    </div>
  )
}

export default Home
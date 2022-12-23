import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import livestock_data from '../../utils/livestock.json'
import axios from 'axios'
const Records = () => {
  const url='http://localhost:5000/livestock/read'
  const [Livestock,setLivestock]=useState([])
  useEffect(()=>{
    axios.get(`${url}`).then((response)=>{
      setLivestock(response.data);
    })
  })
  return (
    <div className='text-center p-10 md:h-screen w-full bg-emerald-200 '>
      <div className='text-center grid grid-cols-1 md:gap-10 md:grid-cols-2 items-start justify-start flex  md:flex md:justify-center md:items-center'>
          <Link to='/newanimal' className='font-medium bg-emerald-900 border-2 border-gray-900
                            rounded text-white hover:bg-emerald-500 hover:border-blue-600 w-[250px]'>
                            <h3 className='m-2'>
                                New Livestock
                            </h3>
            </Link>
            <h1 className='text-3xl font-san italic md: font-black py-6 my-6'>Available Livestock</h1>
           
          </div>
              <p className='text-2xl my-5'>Click card to view Livestock Profile</p>
        <div className=' grid grid-col-1 md:grid-cols-4 gap-10 flex items-center justify-center '>            
            {
                Livestock.map((items,key)=>{
                    return(
                      <Link to='/livestock'>
                      <div key={key} className='bg-emerald-900 rounded-lg text-center h-50 w-48 md:w-full h-full shadow-2xl shadow-gray-900 text-white hover:bg-emerald-500'>
                            <img src={items.image} alt='' className=' h-36  md:h-60 w-full rounded-2xl'/>
                            <h2 className='font-black text-xl m-3 md:font-black text-2xl'>{items.category}</h2>
                        

                        </div>
                    </Link>
                    )
                }
                   
                  
                )
            }
        </div>
    </div>
  )
}

export default Records
import React,{useState,useEffect} from 'react'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { navLinks } from '../../utils/Navdata'
import axios from 'axios'
const Earnings = () => {
    const url='http://localhost:5000/earnings/read'
    const [Earnings, setEarnings]=useState([])
     useEffect(()=>{
            axios.get(`${url}`).then((response)=>{
                setEarnings(response.data)
            })
     },[]);
  return (
    <div  >
         <div className=' flex flex-col items-center justify-center md:hidden'>
            <div className='text-center'>
                     <h1 className='font-medium m-4 text-rose-400'>
                       Not all records are available from this device
                        <Link to='/' className='text-blue-900 underline cursor-pointer m-12'>
                            <h2 >go to dashboard</h2>
                        </Link>

                    </h1>
                   <table className=' w-full mb-4'>
                        <thead className='bg-emerald-100 border-b-2 border-gray-400'>
                        <tr>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Source</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Amount</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                       </tr>                      
                        </thead>
                        <tbody>
                            {
                                Earnings.map((items,key)=>{
                                    return(
                                        <tr className='bg-emerald-200' key={key}>
                                            <td className='p-3 text-sm text-gray-700'>{items.createdAt}</td>
                                            <td className='p-3 text-sm text-gray-700'>{items.source}</td>
                                            <td className='p-3 text-sm text-gray-700'>{items.amount}</td>
                                            <td className='p-3 text-sm text-gray-100'><h4 className='bg-emerald-600 rounded-lg'>{items.status}</h4></td>
                                    </tr>
                                    )
                                })
                            }
                       
                      
                        </tbody>
                   </table>
            </div>
            <Link to='/recordearnings' className='font-medium bg-emerald-600 border-2 border-gray-900
                        rounded text-white hover:bg-gray-900 hover:border-blue-600'>
                        <h3 className='m-2'>
                             Record Earnings
                        </h3>
            </Link>
                    
        </div>
       <div className='m-20 p-30 bg-gray-100 text-center p-5 md:block hidden'>
       <div className='bg-[#f0f5f5] w-full py-6 items-center justify-between flex px-12'>
        {/*search*/}
        <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
            {/* icon*/}
            <Link to='/' className='font-medium bg-blue-600 border-2 border-gray-900
             rounded text-white hover:bg-gray-900 hover:border-blue-600'>
                <h3 className='m-2'>
                    go to dashboard
                </h3>
            </Link>
            <Link to='/recordearnings' className='font-medium bg-emerald-600 border-2 border-gray-900
                        rounded text-white hover:bg-gray-900 hover:border-blue-600'>
                        <h3 className='m-2'>
                             Record Earnings
                        </h3>
            </Link>
        </div>
        {/*Logo*/}
        <div className='items-center w-full justify-center flex space-x-4'>
            <Icons.BriefcaseFill/>
            <h1 className='text-xl text-gray-900 font-medium'>My Accounting</h1>           
        </div>
            <div className='items-center justify-end space-x-6 flex w-full'>                
                {navLinks.slice(1,5).map((link)=>(
                <Link to={link.path} className='flex flex-row items-center text-[15px] justify-center space-x-2 rounded-lg border-2
                hover:bg-gray-900 hover:border-blue-600 hover:text-white'>
                <span>{link.icon}</span>
                <h1>{link.title}</h1>
            </Link>
             ))}
                
                
            </div>
    </div>
                        {/**table */}
    <div className='mx-2 px-6 text-center'>
               
               <table className='w-full m-3'>
                   <thead className='bg-gray-50 border-b-2 border-gray-400'>
                       <tr>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Source</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Amount</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>From</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>recieved by</th>
                           <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                       </tr>
                   </thead>
                   <tbody>
                   {
                                Earnings.map((items,key)=>{
                                    return(
                                        <tr className='bg-emerald-200' key={key}>
                                            <td className='p-3 text-sm text-gray-700'>{items.createdAt}</td>
                                            <td className='p-3 text-sm text-gray-700'>{items.source}</td>
                                            <td className='p-3 text-sm text-gray-700'>{items.amount}</td>
                                            <td className='p-3 text-sm text-gray-700'>{items.from}</td>
                                            <td className='p-3 text-sm text-gray-700'>{items.recievedby}</td>
                                            <td className='p-3 text-sm text-gray-100'><h4 className='bg-emerald-600 rounded-lg'>{items.status}</h4></td>
                                    </tr>
                                    )
                                })
                            }
                      
                   </tbody>
               </table>
           </div>



        </div>         
       
        
           
        </div>
    
  )
}

export default Earnings
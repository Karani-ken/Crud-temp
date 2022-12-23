import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { ActiveTab } from '../../utils/ActiveTab'
import { navLinks } from '../../utils/Navdata' 
const Navbar = () => {
  const ActiveComponent =()=>{

  }
  return (
    <nav className='col-span-2 border-r
    border-[#000] min-h-[90vh] w-[150px]
     xl:w-[250px] pt-8 px-1 flex flex-col
     items-start justify-betwen'>
      <div className='space-y-8 w-full'>
       
            {navLinks.slice(0,1).map((link)=>(
               <Link to={link.path}>
                  <NavItems link={link} key={link.id}/>
               </Link>
              
            )

            )}
            <div className='w-full border-t border-[#000]'/>
             {navLinks.slice(1,5).map((link)=>(
              <Link to={link.path} onClick={()=>{ActiveComponent(link.id)}}>
                <NavItems link={link} key={link.id}/>
              </Link>
                
             ))
            }
      </div>
      <div className='xl:flex hidden flex-col items-center justify-center
      space-y-4 p-4'>
        <h1 className='text-xl w-full font-medium'>
          View your <br /> Earnings now
        </h1>
        <p className='text-black'>Click the button below to view</p>
          <Link to='/earnings' className='w-full py-2 px-3 bg-emerald-600 text-center text-white rounded-lg border-2 hover:bg-white hover:border-sky-600 hover:text-sky-600'>
             Earnings
          </Link>
      </div>
      
    </nav>
  )

  function NavItems({link}){
    const [ActiveNav, setActiveNav] = useRecoilState(ActiveTab)
    return(
      <div onClick={()=>setActiveNav(link.id)}   className={`w-full flex items-center justify-start space-x8
            px-5 cursor-pointer group hover:border-slate-50 border-l-4 my-5
            border-transparent ${ActiveNav === link.id && 'border-slate-50'}`}>
                <span>{link.icon}</span>
                <h1 className='text-gray-900 group-hover:text-sky-600 xl:flex  m-2'>{link.title}</h1>
      </div>
    )
    
  }
}

export default Navbar
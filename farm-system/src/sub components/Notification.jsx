import React, {useState} from 'react'
import * as Icons from 'react-bootstrap-icons'
const Notification = () => {
  const [ActiveSpan, setActiveSpan] = useState()
  return (
    <div className='text-center items-center bg-sky-400  w-[450px] rounded-lg'>
        <Icons.BellFill className='text-rose-800'/>
        <h1 className="font-medium  md:text-2xl">Notifications</h1>
        <div className="grid grid-cols-1  flex items-start justify-center
         md:grid-cols-2 md:w-[400px] gap-1  mx-5 mt-2">
            <span className='text-center bg-rose-400 rounded mb-6'>
                <Icons.BellFill/>
                <h1 className='text-lg'>New Messages</h1>
                <div className="bg-gray-100 h-[40px] mb-1 rounded-lg">
                <p className='text-sm'>You have a new message</p>
                </div>
                <div className="bg-gray-100 h-[40px] mb-1 rounded-lg">
                <p className='text-sm'>You have a new message</p>
                </div>
                <div className="bg-gray-100 h-[40px] mb-1 rounded-lg">
                <p className='text-sm'>You have a new message</p>
                </div>                

            </span>
            <span className='text-center bg-emerald-500 rounded mb-6'>
                <Icons.InboxFill/>
                <h1 className='text-lg'>Messages</h1>
                <div className="bg-gray-100 h-[40px] overflow-y-hidden mb-1 rounded-lg">
                 <p className='text-sm'>A new asset was added to your farm.
                 <a href="#" className='hover:underline'>  Open message</a></p>
                </div>
                <div className="bg-gray-100 h-[40px] overflow-y-hidden mb-1 rounded-lg">
                 <p className='text-sm'>A new asset was added to your farm.
                 <a href="#" className='hover:underline'>  Open message</a></p>
                </div>
                <div className="bg-gray-100 h-[40px] overflow-y-hidden mb-1 rounded-lg">
                 <p className='text-sm'>A new asset was added to your farm.
                 <a href="#" className='hover:underline' onClick={()=>setActiveSpan()}>  Open message</a></p>
                </div>
            </span>
          <span className='text-center bg-sky-900 rounded-lg mb-6 hidden'>
              <h1>Assets</h1>
              <div className='bg-gray-100 mb-1 rounded-lg'>
                <p className='text-sm m-3'>
                  Confirmed you have added a new asset to your records of type Tools.
                  Total cost amounts to 13,000 Kes. <a href='#'>See details</a>
                </p>

              </div>

          </span>
        </div>

    </div>
  )
}

export default Notification
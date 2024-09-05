import React from 'react'
import '../styles/timeline.css'

const Timeline = () => {
  return (
    <div className='grid grid-cols-8 gap-1' >
      <div className='col-start-1 col-end-2 relative grid min-h-screen max-h-screen'>
        <div className='bg-blue-100 flex justify-center'>
            <div className='w-2 h-full bg-indigo-400 circle relative after:bg-green-500 after:w-[25px] after:aspect-square after:rounded-full after:absolute' >

            </div>
        </div>
        <div className='bg-blue-100 flex justify-center'>
            <div className='w-2 h-full bg-indigo-400 circle relative after:bg-green-500 after:w-[25px] after:aspect-square after:rounded-full after:absolute' >

            </div>
        </div>
        <div className='bg-blue-100 flex justify-center'>
            <div className='w-2 h-full bg-indigo-400 circle relative after:bg-green-500 after:w-[25px] after:aspect-square after:rounded-full after:absolute' >

            </div>
        </div>
        <div className='bg-blue-100 flex justify-center'>
            <div className='w-2 h-full bg-indigo-400 circle relative after:bg-green-500 after:w-[25px] after:aspect-square after:rounded-full after:absolute' >

            </div>
        </div>
        <div className='bg-blue-100 flex justify-center'>
            <div className='w-2 h-full bg-indigo-400 circle relative after:bg-green-500 after:w-[25px] after:aspect-square after:rounded-full after:absolute' >

            </div>
        </div>
        <div className='bg-blue-100 flex justify-center'>
            <div className='w-2 h-full bg-indigo-400 circle relative after:bg-green-500 after:w-[25px] after:aspect-square after:rounded-full after:absolute' >

            </div>
        </div>
        <div className='bg-blue-100 flex justify-center'>
            <div className='w-2 h-full bg-indigo-400 circle relative after:bg-green-500 after:w-[25px] after:aspect-square after:rounded-full after:absolute' >

            </div>
        </div>
        <div className='bg-blue-100 flex justify-center'>
            <div className='w-2 h-full bg-indigo-400 circle relative after:bg-green-500 after:w-[25px] after:aspect-square after:rounded-full after:absolute' >

            </div>
        </div>
        

      </div>
      <div className='col-start-2 col-end-9 flex flex-col gap-2  '>
        <div className='h-[11rem] mt-90px p-4  project-container'>
        <div className='header-status'>
            <h4 className='text-lg'>Project Name : <span>Lorem ipsum dolor sit amet consectetur</span></h4>
           
            <h4 className='status'>Status : <span>Open</span></h4></div>
            <br />
            <h4 className='mt-4'>Description : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h4>
            <br />
            
            <div className='department-location '>
            <h4 >Department Name : <span>Public Work Department</span></h4>
            <h4 className='mr-3' >Location : <span >Mathua</span></h4></div>
      
        </div>
        <div className='h-20 m-2 ' >
            <div className=' h-25 m-2'>
            <h4 className="ml-3 text-slate-800">
            Add hover animation effect to notification icon</h4>
            <div className="flex text-slate-800">
            <div className='w-4 h-4 bg-red-800 rounded-full mt-3 ml-2 mb-1'></div>
            <p className='ml-2 mt-1'>priyaashu committed 2 days ago</p>
            </div>
            </div>
            <div className='h-20 m-2'>
            <div className=' h-25 m-2'>
            <h4 className="ml-3 text-slate-800">
            Add hover animation effect to notification icon</h4>
            <div className="flex text-slate-800">
            <div className='w-4 h-4 bg-red-800 rounded-full mt-3 ml-2 mb-1'></div>
            <p className='ml-2 mt-1'>priyaashu committed 2 days ago</p>
            </div>
            </div>
            

            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default Timeline

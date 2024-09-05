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
      <div className='col-start-2 col-end-9 flex flex-col gap-2'>
        <div className='bg-red-400 h-[11rem]'>
            <h4>Project Name : <span>Lorem ipsum dolor sit amet consectetur</span></h4>
            <h4>Status : <span>Open</span></h4>
            <h4>Description : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum sint quaerat qui enim blanditiis numquam excepturi laudantium? Tenetur nisi a optio quod sequi provident.</span></h4>
            <h4>Department Name : <span>Public Work Department</span></h4>
            <h4>Location : <span>Mathua</span></h4>
        </div>
        <div className='bg-blue-400' >
            <div className='bg-red-300 h-20 m-2'>

            </div>
            <div className='bg-red-300 h-20 m-2'>

            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default Timeline

import React from 'react'

const Project = () => {
    const departments = Array(7).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  return (
    <div className=''>
      <div className='flex justify-between bg-teal-200 h-12 rounded-[12px] border-slate-950 mb-7'>
        <h2 className='text-3xl ml-3 '>Departments</h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded-lg '>AddProject+</button>
      </div>

      {departments.map((dept, index) => (
        <div key={index} className='flex shadow-xl p-6 border-gray-900 rounded-lg justify-between mt-4 mr-[150px] ml-[150px]'>
          <p>{dept}</p>
          <div className='flex justify-around mr-7'>
          <div className='  w-[1px] h-auto bg-black mx-4  '></div>
          <div className='w-5 h-5 bg-red-800 rounded-full  mt-1 ml-2 mb-1'>

          </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default Project;


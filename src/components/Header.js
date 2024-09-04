import React from 'react'

const Header = () => {
  return (
    <div className=" w-screen h-20 bg-white grid grid-cols-10 gap-1 overflow-hidden">
        <div className="flex justify-center items-center">
          <h5 className="w-1/2 bg-indigo-400 hover:bg-indigo-500 text-white text-3xl font-semibold aspect-square flex justify-center items-center rounded-full hover:cursor-pointer " > SIH </h5>
        </div>
        <div className="col-start-2 col-end-9 ">
          <ul className="flex flex-row gap-10 w-full h-full text-slate-800 font-normal text-2xl " >
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500" >Dashboard</li>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500" >Team</li>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500" >Projects</li>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500" >Forum</li>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500" >Calender</li>
          </ul>
        </div>
        <div className="relative flex justify-center items-center text-4xl text-blue-500 hover:cursor-pointer custom-hover-effect">
  <i className="fa-regular fa-bell"></i>
</div>

        
       
        <div className="flex justify-center items-center text-4xl text-blue-500 hover:cursor-pointer hover:border-b-4 hover:border-indigo-500 hover:bg-indigo-50">
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
  )
}

export default Header

import React from 'react'

// import '../styles/notification.css'

const Notification = () => {
  return (
    <div className="bg-white w-[30%] absolute right-10 top-24 min-w-80
                    min-h-[550px] rounded-[1rem] shadow-lg z-[3]" >
        <h4 className="py-5 border-b-2 border-indigo-400 text-center font-medium text-slate-600 text-2xl " > Notification </h4>
        
        <div className=" w-[95%] h-16 mx-auto mt-1 grid grid-cols-8 gap-1 relative cursor-pointer">
            <div className="col-span-1 flex items-center justify-center" >
                <i className="fa-solid fa-user text-2xl text-indigo-500 bg-slate-300 w-12 h-12 flex justify-center items-center rounded-full "></i>
            </div>
            <div className=" bg-slate-200 rounded-xl col-span-7 flex p-4 items-center">
                <p> User has been added by creating account </p>
            </div>
            <div className="absolute bottom-1 right-4 text-xs font-medium text-slate-600">
                <p className="max-w-max" > Today 17:25 </p>
            </div>
        </div>

        <div className=" w-[95%] h-16 mx-auto mt-1 grid grid-cols-8 gap-1 relative cursor-pointer">
                <div className="col-span-1 flex items-center justify-center" >
                    <i className="fa-solid fa-user text-2xl text-indigo-500 bg-slate-300 w-12 h-12 flex justify-center items-center rounded-full "></i>
                </div>
                <div className=" bg-slate-200 rounded-xl col-span-7 flex p-4 items-center">
                    <p> User has been added by creating account </p>
                </div>
                <div className="absolute bottom-1 right-4 text-xs font-medium text-slate-600">
                    <p className="max-w-max" > Today 17:25 </p>
                </div>
        </div>
    </div>
  )
}

export default Notification

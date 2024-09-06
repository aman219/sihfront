import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  Navbars  from "./Navbar";
import "../styles/home.css"

const Header = () => {
  const dispatch = useDispatch();
  const noti = useSelector((state) => state.noti);

  const handleNoti = () => {
    console.log(noti.display);
    if (noti.display === "hidden")
      dispatch({ type: "noti/setNoti", payload: { dsiplay: "" } });
    else dispatch({ type: "noti/setNoti", payload: { display: "hidden" } });
  };
  return (
    <div className=" w-screen h-20 bg-white grid grid-cols-10 gap-1 overflow-hidden shadow-md ">
      <div className="flex justify-center items-center">
        <h5 className="w-1/2 bg-indigo-400 hover:bg-indigo-500 text-white text-3xl font-semibold aspect-square flex justify-center items-center rounded-full hover:cursor-pointer ">
          {" "}
          SIH{" "}
        </h5>
      </div>
      <Navbars />
      <div
        className="relative flex justify-center items-center text-4xl text-blue-500 hover:cursor-pointer custom-githover-effect ml-[900px] "
        onClick={handleNoti}
      >
        <i className="fa-regular fa-bell"></i>
      </div>
        
       
        <Link to="logout/" className="flex justify-center items-center text-4xl text-blue-500 hover:cursor-pointer hover:border-b-4 hover:border-indigo-500 hover:bg-indigo-50 custom-hover-effect">
          <i className="fa-solid fa-right-from-bracket"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;

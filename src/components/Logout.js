import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${process.env.REACT_APP_SERVER}/employee/logout`, true);
        xhr.onload = () => {
          if (xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
            dispatch({ type: 'auth/setAuth', payload: { user: null } });
            navigate("/login");
          } else {
            console.log(`Error code : ${xhr.status}`);
          }
        }
        xhr.withCredentials = true;
        xhr.send();
    })
  return (
    <div className="logout" >
      
    </div>
  )
}

export default Logout

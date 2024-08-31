import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/messagebox.css'

const MessageBox = () => {

    const message = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({ type: 'message/setMessage', payload: { display: "display", message: ""} });
    }
    
  return (
    <div className={`messageBox ${message.display}`}  >
        <button className="close" onClick={handleClose} >X</button>
        <h4> {message.message} </h4>
    </div>
  )
}

export default MessageBox

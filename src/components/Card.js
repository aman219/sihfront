import React from 'react';
import '../styles/card.css';

// import images


const Card = () => {

    return (

        <div className='main'>

            <h1> My <span> Skills </span> </h1>

            <div className='h-[600px] w-screen grid grid-rows'>
                <div className='bg-red-400 min-h-56'>
                    <span>icon</span>
                    <h2> Public Work Department </h2>
                    <p>  </p>
                </div>

                <div className='bg-green-400 min-h-56'>

                </div>
                
                <div className='bg-blue-400 min-h-56'>

                </div>
                
                <div className='bg-slate-400 min-h-56'>

                </div>
                
            </div>
        </div>
    );
};

export default Card;
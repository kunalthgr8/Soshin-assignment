import React from 'react';
import Log from "../../assets/logo.png"

function Logo({ }) {
  return (
    <div className='transition duration-400 ease-out hover:ease-in flex justify-center text-center' >
        <img className='transition duration-400 ease-out hover:ease-in transform hover:scale-110' src={Log} alt="Aoushadhi"  />
    </div>
  );
}

export default Logo;

import React from 'react'
import { NavBarN } from './Nav'

export const Header = () => {
  return (
    <header className='header row bg-dark text-light'>
      
      <div className="fs-1 fw-bold ms-4 col-lg-2 col-md-6 col-sm-6">
          FORTER 
      </div>

      <div className='fs-5 col'>
        <NavBarN />
      </div>
     
    </header>
  );
};

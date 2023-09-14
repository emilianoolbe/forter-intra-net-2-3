import React from 'react'
import { NavBarN } from './Nav'
import '../../../public/styles/header.css';

export const Header = ({usuario, setUsuario}) => {
  return (
    <header className='header'>
      <div>
        <NavBarN usuario = {usuario} setUsuario = {setUsuario}/>
      </div>
     
    </header>
  );
};

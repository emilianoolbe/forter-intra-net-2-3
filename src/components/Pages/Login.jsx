import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { login, loginError } from '../../reducer/user/userSlice';
import { Enrutador } from '../../routes/Enrutador';
import { getUser } from '../../helpers/getUser';
import '../../../public/styles/login.css';


export const Login = () => {
  
    const dispatch = useDispatch();
    const { username, password, error } = useSelector(state => state.user);
    
    //Métodos
    const handlerLogin = e => {
        e.preventDefault();

        if (e.target.email.value === '' || e.target.password.value === '') {
            let usuario = {
                username: '',
                password: '',
                error: 'Para poder inciar sesión debe ingresar usuario y contraseña'
            };
            dispatch(loginError(usuario))
        }else{
          let usuario = {
              username: e.target.email.value,
              password: e.target.password.value,
              error: ''
          };
          dispatch(login(usuario));
        };
        //const user = getUser();
        // Si verifico al usuario logueo
        // if (user){
        //     let usuario = {
        //         username: e.target.email.value,
        //         password: e.target.password.value,
        //         error: ''
        //     };

        //     dispatch(login(usuario));
        // }
    };
    
    if (username === '' && password === '' && error !== '' ) {
        return (
          <>
            <div className="header-login bg-dark text-light">
              <div className=" fs-1 fw-bold ms-4">FORTER</div>
            </div>
    
            <div className="container login">
    
              <div className="error-login">{error}</div>
    
              <form onSubmit={handlerLogin}>
                <input type="text" name="email" placeholder='Usuario' />
                <input type="password" name="password" placeholder='Contraseña' />
                <input type="submit" value="Login" />
              </form>
            </div>
          </>
        )
    
    }else if (username === '' && password === '' && error === ''){
    
        return (
          <>
            <div className="header-login bg-dark text-light">
              <div className=" fs-1 fw-bold ms-4">FORTER</div>
            </div>
            
            <div className="container login">
                <form onSubmit={handlerLogin}>
                  <input type="text" name="email" placeholder='Usuario' />
                  <input type="password" name="password" placeholder='Contraseña' />
                  <input type="submit" value="Login" />
                </form>
            </div>
          </>
        )    
    }else if (username !== '' && password !== '' && error === ''){
    
        return (
          <>
            <Enrutador />
          </>
        )    
    };
};

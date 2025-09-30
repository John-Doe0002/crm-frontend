import React, {useState} from "react";

import { Loginform } from "../../components/login/login.pge";
import { PassRessForm } from "../../components/password-reset/passwordreset.pge";

import './entry.style.css';

export const Entry = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [FrmLoad, setFrmLoad] = useState('login');

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    if(name === 'plate number') setUsername(value);
    if(name === 'password') setPassword(value);

    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(!username || !password) {
      return alert('Please fill in all the fields');
    }

    console.log(username, password);
  }

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if(!username) {
      return alert('Please fill in all the field');
    }

    console.log(username);
  }

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };


  return (
    <div className="entry-page">
      <div className="form-box">
        {FrmLoad === 'login' &&
        <Loginform 
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
          username={username} 
          password={password}
        />}

        {FrmLoad === 'reset' &&
        <PassRessForm 
          handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          username={username} 
        />}
      </div>
    </div>
  )
};

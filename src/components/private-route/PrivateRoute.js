import React from 'react'
//import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom';


export const PrivateRoute = () => {
    let auth = {'token':true}
  return (
    auth.token ? <Outlet/> : <Navigate to='/' />
   )
};

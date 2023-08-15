import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import isLogin from './isLogin';

const PrivateRoute = ({ children }) => {
  return isLogin() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

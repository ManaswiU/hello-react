import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Menu() {
      return (
         <div>
          <Link to={'/home'}>Home</Link> | 
          <Link to={'/customer'}>Customer</Link> | 
          <Link to={'/student'}>Student</Link> | 
          <Link to={'/about'}>About</Link> |
          <Link to={'/login'}>Logout</Link> |
         </div>
      );
   }
export default Menu;
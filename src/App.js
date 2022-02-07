import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import About from './containers/About';
import PageNotFound from './containers/PageNotFound';
import {CustomerAppF} from './containers/CustomerApp'
import {CustomerAdd} from './containers/AddCustomer'
import {Customers} from './containers/Customers'
import { Students } from './containers/Student';
import {StudentAdd} from './containers/AddStudent'

const App = () => {
   return (
     <Router>
      <div style={{marginLeft:'10px'}}>
       <h2> Student App</h2>
         <Routes>
           <Route exact path="/" element={<Navigate to={{pathname: "/login" }}/>}/>
           <Route exact path="/login" element={<Login/>}/>
           <Route exact path="/about" element={<About/>}/>

           <Route exact path="/customer/edit/:recordId" element={<CustomerAdd/>}/>
           <Route exact path="/customer/add" element={<CustomerAdd/>}/>
           <Route exact path="/customer" element={<Customers/>}/>

           <Route exact path="/student/edit/:recordId" element={<StudentAdd/>}/>
           <Route exact path="/student/add" element={<StudentAdd/>}/>
           <Route exact path="/student" element={<Students/>}/>

           <Route exact path="/home" element={<Home/>}/>
           <Route path="*" element={<PageNotFound/>}/>
         </Routes>
      </div>
     </Router>
   );
 }
export default App
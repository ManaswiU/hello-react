import React, { useState,useEffect } from 'react';
import Menu from '../components/Menu';
import {getCustomers} from '../service/CustomerAPI'
import { getStudents } from '../service/StudentAPI';
import Button from '@mui/material/Button';
   function Home() {
      const[count,setCount] = useState(' ');
      const[countS,setCountS] = useState(' '); 
     
      const loadCustomers = async () =>{
         let tempCustomers = await getCustomers();
         setCount(tempCustomers.length);
       }

       const loadStudents = async () =>{
         let tempStudents = await getStudents();
         setCountS(tempStudents.length);
       }

       useEffect(()=>{
         loadCustomers();
       },[]);

       useEffect(()=>{
       loadStudents();
      },[]);
      return (
         <div>
            <Menu/>
            <h2>Home</h2>
            <p>There are {count} customers in this System</p>
            <p>There are {countS} students in this System</p>
            <Button variant='contained' color='primary'>Add</Button>
         </div>
      );
   }
    export default Home;
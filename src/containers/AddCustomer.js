import React ,{useEffect, useState} from 'react';
import Menu from '../components/Menu';
import { addCustomer, getCustomers,deleteCustomer,updateCustomer, getCustomerById } from '../service/CustomerAPI';
import { Navigate, useNavigate,useParams } from 'react-router';
import Button from '@mui/material/Button';
export function CustomerAdd() {
 const [items,setItems] = useState([]);
 let { recordId } = useParams();
 const navigate = useNavigate();
    const [customer,setCustomer] = useState({
        id:0, 
        name: '',
        email: '',
        phone: '',
        city: '',
        address: ''
    });
    const loadCustomer = async (recordId) =>{
      let tempCustomer = await getCustomerById(recordId);
      setCustomer({...tempCustomer});
      console.log("tempCustomer:",tempCustomer);
    }
    useEffect(()=>{
      if(recordId){
        loadCustomer(recordId);
        setBLabel('Update');
      }
    },[]);
    const [bLabel,setBLabel] = useState('Add')

    const handleCancel = () =>{
        setCustomer({
            id:0,
            name: '',
            email: '',
            phone: '',
            city: '',
            address: '',
          });
      }
    const handleChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value });
      }
    const handleSubmit = async (e) => {
        console.log("handleSubmit:",customer.id);
        e.preventDefault();
        if (!customer.name.length) {
          return;
        }
        if(customer.id == 0){ //add
            customer.id = Date.now();
            await addCustomer(customer);
        }else{//update
            await updateCustomer(customer);
        }
        navigate('/customer');
      }
    return (
      <div>
        <Menu/>
        <h3>Add Customer</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder='Name'
            onChange={handleChange}
            value={customer.name}
          /><br/><br/>
          <input
            name="email"
            placeholder='Email'
            onChange={handleChange}
            value={customer.email}
          /><br/><br/>
          <input
            name="phone"
            placeholder='Phone'
            onChange={handleChange}
            value={customer.phone}
          /><br/><br/>
            <input
            name="city"
            placeholder='City'
            onChange={handleChange}
            value={customer.city}
          /><br/><br/>
          <input
            name="address"
            placeholder='Address'
            onChange={handleChange}
            value={customer.address}
          /><br/><br/>
         
          <button >{bLabel}</button> &nbsp;&nbsp;
          <input onClick={handleCancel} type='Button' value="Cancel" /> 
        </form>
      </div>
    );
    }
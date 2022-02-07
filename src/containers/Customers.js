import React ,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import Menu from '../components/Menu';
import { addCustomer, getCustomers,deleteCustomer,updateCustomer } from '../service/CustomerAPI';
import { Button } from '@mui/material';
export function Customers() {
 const [items,setItems] = useState([]);
    const navigate = useNavigate();
    const [customer,setCustomer] = useState({
        id:0, 
        name: '',
        email: '',
        phone: '',
        city:'',
        address: ''
    });
    const loadCustomer = async () =>{
      let tempCustomers = await getCustomers();
      setItems(tempCustomers);
    }
    useEffect(()=>{
      loadCustomer();
    },[]);
    const [bLabel,setBLabel] = useState('Add')
    const handleDelete = async (recordId) => {
        console.log(">>handleDelete "+recordId)
        await deleteCustomer({id:recordId});
        loadCustomer();
        }

    const handleUpdate = (recordId) => {
        navigate('/customer/edit/'+recordId);
        }
    const handleCancel = () =>{
        setCustomer({
            id:0,
            name: '',
            email: '',
            phone: '',
            city:'',
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
        loadCustomer();
        setCustomer({
          id:0,
          name: '',
          email: '',
          phone: '',
          city:'',
          address: ''
        });
        setBLabel('Add');
      }

    return (
      <div>
        <Menu/>
        <h3>Customers </h3>
        <Button variant="contained" color="primary" onClick={()=>{navigate('/customer/add');}}>Add</Button>
        {/* <button onClick={()=>{navigate('/customer/add');}} >Add</button> <br/><br/> */}
        <TodoList 
        items={items}
        doDelete={handleDelete}
        doUpdate={handleUpdate}
        />
      </div>
    );
}

function TodoList ({items,doDelete,doUpdate}) {
    return (
        <div>
        <table class="mui-table">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Address</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.city}</td>
                <td>{item.address}</td>
                <td><button onClick={()=>doUpdate(item.id)}>Update</button></td>
                <td><button onClick={()=>doDelete(item.id)}>Delete</button></td>
            </tr>)
            )}
            </tbody>
            </table>
      </div>
    );
}

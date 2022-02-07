import React ,{useEffect, useState} from 'react';
import Menu from '../components/Menu';
import { addCustomer, getCustomers,deleteCustomer,updateCustomer } from '../service/CustomerAPI';
export function CustomerAppF() {
 const [items,setItems] = useState([]);
    const [customer,setCustomer] = useState({
        id:0, 
        name: '',
        email: '',
        phone: '',
        city: '',
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
            console.log(">>handleUpdate "+recordId)
            let tempList = items.filter((item)=>(item.id == recordId ))
            if(tempList.length > 0){
                let record = tempList[0];
                setCustomer({...record});
                setBLabel("Update")
            }
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
        <h3>Customer App Function</h3>
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
            value={customer.phone}
          /><br/><br/>
          <input
            name="address"
            placeholder='Address'
            onChange={handleChange}
            value={customer.address}
          /><br/><br/>
          <button >{bLabel}</button> &nbsp;&nbsp;
          <input onClick={handleCancel} type='button' value="Cancel" /> 
        </form>
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
        <table>
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

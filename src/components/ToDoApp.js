import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../containers/Menu'

export class TodoAppC extends React.Component {
  state = { items: [
        {
            id: 1,
            name: "Vivek Singhwal",
            city: "Bangalore",
            email: "vivek@pyther.com",
            address: "India",
            phone:'9724232340'
          },
          {
            id: 2,
            name: "Vivek",
            city: "Pune",
            email: "vivek@pyther.com",
            address: "India",
            phone:'9724232340'
          },
          {
            id: 3,
            name: "Rashid",
            city: "Delhi",
            email: "vivek@pyther.com",
            address: "India",
            phone:'9724232340'
          }
        ],
        id:0, 
        name: '',
        city: '',
        email: '',
        phone: '',
        address: '',
        bLabel: 'Add'
    };

  render() {
    return (
      <div>
        <h3>Customer App</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder='Name'
            onChange={this.handleChange}
            value={this.state.name}
          /><br/><br/>
          <input
            name="city"
            placeholder='City'
            onChange={this.handleChange}
            value={this.state.city}
          /><br/><br/>
          <input
            name="email"
            placeholder='Email'
            onChange={this.handleChange}
            value={this.state.email}
          /><br/><br/>
          <input
            name="phone"
            placeholder='Phone'
            onChange={this.handleChange}
            value={this.state.phone}
          /><br/><br/>
          <input
            name="address"
            placeholder='Address'
            onChange={this.handleChange}
            value={this.state.address}
          /><br/><br/>
          <button>{this.state.bLabel}</button> &nbsp;&nbsp;
          <input onClick={this.handleCancel} type='button' value="Cancel" /> 
        </form>
        <TodoList 
        items={this.state.items}
        handleDelete={this.handleDelete}
        handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
  handleDelete = (recordId) => {
    console.log(">>handleDelete "+recordId)
    let tempList = this.state.items.filter((item)=>(item.id != recordId ))
    this.setState({items:tempList});
    }
    handleUpdate = (recordId) => {
        console.log(">>handleUpdate "+recordId)
        let tempList = this.state.items.filter((item)=>(item.id == recordId ))
        if(tempList.length > 0){
            let record = tempList[0];
            this.setState({...record,bLabel:'Update'});
        }
    }
  handleCancel = () =>{
    this.setState(prevState => ({
        id:0,
        name: '',
        city: '',
        email: '',
        phone: '',
        address: '',
      }));
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      city: this.state.city,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      id: Date.now()
    };
    if(this.state.id == 0){ //add
        this.setState((prevState)=>{
            items: prevState.items.concat(newItem)
        })
    }else{//update
        let tempList = this.state.items.filter((item)=>(item.id == this.state.id ))
        if(tempList.length>0){
            let record = tempList[0];
            record.name = this.state.name;
            record.city = this.state.city;
            record.email = this.state.email;
            record.phone = this.state.phone;
            record.address = this.state.address;
        }
    }
    this.setState(prevState => ({
      id:0,
      name: '',
      city: '',
      email: '',
      phone: '',
      address: '',
      bLabel:'Add'
    }));
  }
}

function TodoList ({items,handleDelete,handleUpdate}) {
    return (
        <div>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>City</th>
                <th>Email</th>
                <th>Phone</th>
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
                <td>{item.city}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td><button onClick={()=>handleUpdate(item.id)}>Update</button></td>
                <td><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
            </tr>)
            )}
            </tbody>
            </table>
      </div>
    );
}

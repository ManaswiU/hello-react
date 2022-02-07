import React from 'react';
import ReactDOM from 'react-dom';

export class TodoAppC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], id: 0, name: '', email: '', phone: '', address:'' };
    
  }

  render() {
    return (
      <div>
        <h3>Customer App</h3>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder='Name'
            onChange={this.handleChange}
            value={this.state.name}
          /><br/><br/>
           <input name="email" placeholder='Email'
            onChange={this.handleChange}
            value={this.state.email}
          /><br/><br/>
           <input name="phone" placeholder='Phone'
            onChange={this.handleChange}
            value={this.state.phone}
          /><br/><br/>
           <input name="address" placeholder='Address'
            onChange={this.handleChange}
            value={this.state.address}
          /><br/><br/>
          <button>Add</button> &nbsp;&nbsp;
          <input type='button' value="Cancel" /> 
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange = (e) => {
      
    this.setState({
        [e.target.name]: e.target.value
    });
    
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    let generateId=()=>{
        let arrayId = this.state.items.map((item)=>(item.id))
        return Math.max(0,...arrayId) +1; // (2,4,5,6)
    }
    const newItem = {
      name: this.state.name,
      id: generateId(),
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address
    };
    console.log(newItem);
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      name: '',
      email: '',
      phone: '',
      address: ''
    }));
  }

}

function TodoList ({items}) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
          {item.id} &nbsp;&nbsp; |  &nbsp;&nbsp; 
            {item.name} &nbsp;&nbsp; |  &nbsp;&nbsp; 
            {item.email} &nbsp;&nbsp; |  &nbsp;&nbsp;  
            {item.phone} &nbsp;&nbsp; |  &nbsp;&nbsp; 
            {item.address}</li>
        ))}
      </ul>
    );
}

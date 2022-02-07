import React from 'react';
//function Person(props) {
function Person({name,email}) {
  console.log(">> Person function");
    const doLogin=(name )=>{
      alert('hello Login to '+ name);
    }
    return (
      <div>
        <h5>Person Name {name}</h5>
        <h5>Person Email {email}</h5>
        <button onClick={()=>doLogin('Megha')} >Login</button>
      </div>
    );
  }

  export class PersonC extends React.Component{
    // this.props
    doLogin=(name )=>{
      alert('hello Login to '+ name);
    }
    render() {
      console.log(">> render");
    return (
      <div>
        <h5>Person Name {this.props.name}</h5>
        <h5>Person Email {this.props.email}</h5>
        <button onClick={()=>this.doLogin('Manaswi')} >Login</button>
      </div>
    );
  }
}
  export default Person;
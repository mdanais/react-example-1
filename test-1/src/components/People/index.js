import React, { Component } from 'react';
import Person from './components/Person';

export default class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [{
        firstName: "Russel",
        lastName: "Gauthier"
      }, { firstName: "Michel", lastName: "Danais"}]
    };
  }
  
  render = () => {
    return (<div>Peoples of the worlds: 
        <div className="people-header">
          <div className="firstName">First name</div>
          <div className="lastName">Last name</div>
        </div>
        {this.state.people.map(
        (person) => { 
          return <Person {...person}/>;
        }
        )
    }</div>)
  }
}

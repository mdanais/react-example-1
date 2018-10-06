import React, {Component} from 'react';
import './index.scss';
export default class Person extends Component {
    render = () => (
        <div className="person stuff">
            <div className="firstName">{this.props.firstName}</div>
            <div className="lastName">{this.props.lastName}</div>
        </div>
  )
}
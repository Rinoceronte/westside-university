import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Student from '../Student/Student';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({
        students: res.data
      });
    }).catch(err => console.log(err));
  }

  render() {
    let mappedArray = this.state.students.map((s, i) => <Link key={i} to={`/student/${s.id}`}><h3>{s.first_name} {s.last_name}</h3></Link>);
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedArray}
      </div>
    )
  }
}
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  // Initialize state
  state = { 
    passwords: [],
    name: null,
    email: null,
    school: null
  }

  putDataToDB = () => {
      axios.post('apis/putData', {
        name: this.state.name,
        email: this.state.email,
        school: this.state.school
      });
  };

  render() {
    return (
      <div className='all'>
        <div className="App">
          <h2> Project ID </h2>
          <h1> Find your path </h1>
          <h3> 1. Take a quick assessment. </h3>
          <h4> Time for you to show off your soft skills. </h4>
          <h3> 2. Apply to companies. </h3>
          <h4> Apply to different roles and companies. </h4>
          <h3> 3. Keep the momentum going! </h3>
          <h4> Project ID delivers your applications for you. </h4>
          <input
              type="text"
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Name"
          />
          <input
              type="text"
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Email"
          />
          <input
              type="text"
              onChange={(e) => this.setState({ school: e.target.value })}
              placeholder="School"
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default App;

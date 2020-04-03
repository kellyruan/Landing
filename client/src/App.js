import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = { 
    passwords: [],
    firstname: null,
    lastname: null,
    email: null,
    school: null
  }

  putDataToDB = () => {
      axios.post('apis/putData', {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        school: this.state.school
      });
  };

  render() {
    return (
      <div className='App'>
        <h2> Project ID </h2>
        <div className="grid">
          <div className="grid1">
            <h1> Find Your Path </h1>
            <h3> 1. Play a few quick games. </h3>
            <h4> Time for you to show off your soft skills. </h4>
            <h3> 2. Apply to companies. </h3>
            <h4> Search for different roles and companies. </h4>
            <h3> 3. Keep the momentum going! </h3>
            <h4> Stay connected to companies while you wait. </h4>
          </div>
          <div className="grid2">
            <h3 className="formtext"> Interested? Sign Up Now </h3>
            <input
                type="text"
                onChange={(e) => this.setState({ firstname: e.target.value })}
                placeholder="First Name"
            />
            <input
                type="text"
                onChange={(e) => this.setState({ lastname: e.target.value })}
                placeholder="Last Name"
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
      </div>
    );
  }
}

export default App;

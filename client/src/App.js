import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  // Initialize state
  state = { 
    passwords: [],
    name: null,
    email: null
  }

  putDataToDB = () => {
      axios.post('apis/putData', {
        id: 10,
        name: this.state.name,
        email: this.state.email
      });
  };

  render() {
    return (
      <div className="App">
        <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="Name"
            style={{ width: '200px', height: '50px', borderRadius: '8px', fontSize: '20px', textAlign: 'center', marginTop: '100px', marginBottom: '30px' }}
        />
        <br />
        <input
            type="text"
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Email"
            style={{ width: '200px', height: '50px', borderRadius: '8px', fontSize: '20px', textAlign: 'center', marginBottom: '50px' }}
        />
        <br />
        <button onClick={() => this.putDataToDB(this.state.message)} style={{ width: '200px', height: '50px', borderRadius: '8px', fontSize: '20px', textAlign: 'center' }}>
          Login
        </button>
      </div>
    );
  }
}

export default App;

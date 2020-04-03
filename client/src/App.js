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

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  putDataToDB = () => {
      axios.post('apis/putData', {
        id: 10,
        name: this.state.name,
        email: this.state.email
      });
  };

  render() {
    const { passwords } = this.state;

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button>
            <button onClick={() => this.putDataToDB()} style={{ width: '200px', height: '50px', borderRadius: '8px', fontSize: '20px', textAlign: 'center' }}>
              Login
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;

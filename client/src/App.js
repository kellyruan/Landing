import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './App.css';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const trackingId = "UA-162746347-1";
ReactGA.initialize(trackingId);


const history = createBrowserHistory();
history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '48%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '250px'
  }
};

class App extends Component {
  state = { 
    passwords: [],
    firstname: null,
    lastname: null,
    email: null,
    school: null,
    showModal: false
  }

  componentWillMount() {
        ReactGA.set({ page: "/" });
        ReactGA.pageview("/");
    }

  closeModal = this.closeModal.bind(this);

  putDataToDB = () => {
      this.setState({ 
        showModal: true,
        firstname: '',
        lastname: '',
        email: '',
        school: '',
      });
      axios.post('apis/putData', {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        school: this.state.school
      });
  };
  
  closeModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className='App'>
        <div className="title">
          <h2> Project ID </h2>
        </div>
        <div className="grid">
          <div className="grid1">
            <h1> Find Your Path </h1>
            <h3> 1. Play a few quick games. </h3>
            <h4 style={{ opacity: '80%' }}> Time for you to show off your soft skills. </h4>
            <h3> 2. Apply to companies. </h3>
            <h4 style={{ opacity: '80%' }}> Search for different roles and companies. </h4>
            <h3> 3. Keep the momentum going! </h3>
            <h4 style={{ opacity: '80%' }}> Stay connected to companies while you wait. </h4>
          </div>
          <div className="grid2" style={{ opacity: '70%' }}>
            <h3> Interested?</h3>
            <h4 style={{ opacity: '70%' }}> Sign up here to be on the waiting list for the latest updates! If you have any questions or feedback, please contact us at kellyruan303@gmail.com.</h4> 
            <input
                type="text"
                onChange={(e) => this.setState({ firstname: e.target.value })}
                placeholder="First Name"
                value={this.state.firstname}
            />
            <input
                type="text"
                onChange={(e) => this.setState({ lastname: e.target.value })}
                placeholder="Last Name"
                value={this.state.lastname}
            />
            <input
                type="text"
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Email"
                value={this.state.email}
            />
            <input
                type="text"
                onChange={(e) => this.setState({ school: e.target.value })}
                placeholder="School"
                value={this.state.school}
            />
            <button onClick={() => this.putDataToDB(this.state.message)}>
              Sign Up
            </button>
            <Modal 
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              style={customStyles}
            >
              <div className="modal">
                <h3 style={{ opacity: '80%' }}> Thank you for your interest! We will try to get back to you as soon as possible.</h3>
              <button onClick={this.closeModal}>Close</button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

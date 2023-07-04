import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import ContactList from './components/containers/contactList';

class App extends Component {
  render() {
    return (
      <div>
        <ContactList></ContactList>
      </div>
    );
  }
}

export default App;

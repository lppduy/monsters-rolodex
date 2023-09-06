import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { fName: 'James', lName: 'Le' },
      company: 'Tesla',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.fName} {this.state.name.lName}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: { fName: 'Elon', lName: 'Musk' } });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 'linda001',
        },
        {
          name: 'Frank',
          id: 'frank001',
        },
        {
          name: 'Jacky',
          id: 'jacky001',
        },
        {
          name: 'Andrei 🌝',
          id: 'andrei001',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

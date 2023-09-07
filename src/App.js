import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      inputValue: '',
    };

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          },
        );
      });
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={e => {
            this.setState({ inputValue: e.target.value });
            // input: e.target.value
            // value => setState() => filter = > map
            // output: filterArray => map
          }}
        />
        {this.state.monsters
          .filter(monster => monster.name.toLowerCase().includes(this.state.inputValue))
          .map(monster => (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          ))}
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Searchbar from './components/Searchbar';
import './App.css';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <Searchbar/>
      </div> 
    );
  }
}

export default App;

import { Component } from 'react';
import './App.css';
import HeaderPage from './components/Header'


class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <HeaderPage />
      </div>
    );
  }  
}

export default App;

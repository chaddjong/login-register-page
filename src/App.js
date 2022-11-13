import { Component } from 'react';
import './App.css';
import HeaderPage from './components/Header'
import RegisterPage from './components/Register';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <RegisterPage />
      </div>
    );
  }  
}

export default App;

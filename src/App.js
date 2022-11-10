import React from 'react';
import './App.css';
import Form from '../src/components/Form/Form';
import Inputitems from './components/Inputitems/Inputitems';

function App() {
  return (
    <div className="App">
       <nav>
        <a href='LoginForm'>LoginForms</a>
        <a href='/Inputitems'>Inputitems</a>
      </nav>
      <Form/>
      <Inputitems/>
    </div>
  );
}

export default App;

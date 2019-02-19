import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import useService from './hooks/useService';
import { ServiceTest } from './ServiceTest';
import { ServiceTest2 } from './serviceTest2';

function App() {
  const person = useService(ServiceTest);

  console.log('render Father');
  return (
    <div className="App">
      <Test person={person} />
    </div>
  );
}

export default App;

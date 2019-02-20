import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import useService from './hooks/useService';
import { ServiceTest } from './ServiceTest';
import { ServiceTest2 } from './serviceTest2';
import { observer } from 'mobx-react';
import TestNormal from './TestNormal';
import { component, injectService } from './hooks';

export const ctx = React.createContext({
  color: 'red'
});

const App = () => {
  const st1 = injectService(ServiceTest);
  console.log('render father');
  return (
    <ctx.Provider>
      <div className="App">
        <TestNormal />
      </div>
      {st1.age}
    </ctx.Provider>
  );
};

export default component(App);

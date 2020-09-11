import React from 'react';
import logo from './logo.svg';
import './App.css';

const TO_DO_LIST = [
  'eat',
  'sleep',
  'code',
  'add',
  'commit',
  'push',
  'repeat',
]

const genertateList = () => TO_DO_LIST.map((element, index) => <li key={index}>{element}</li>);

function App() {
  return (<ol className="App">
    {genertateList()}
  </ol>);
}

export default App;

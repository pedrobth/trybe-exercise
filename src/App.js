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

const genertateList = () => TO_DO_LIST.map(task => (`<li>${task}</li>`));

console.log(genertateList());

function App() {
  return (genertateList());
}

export default App;

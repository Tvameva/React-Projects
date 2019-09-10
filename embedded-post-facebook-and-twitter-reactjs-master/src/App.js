import React from 'react';
import logo from './components/logo.png';
import './App.css';
import Facebook from './components/Facebook'
import FacebookPost from './components/FacebookPost'
import Tweet from './components/Tweet'


function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo}  alt="logo" />
              <h1 className="App-title">Organize Social - Facebook feed</h1>
              
              <FacebookPost />
              <Tweet/>
          </header>
          
    </div>
  );
}

export default App;

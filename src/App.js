import React, { Component } from 'react';
import TodoList from  './Components/TodoList.js';
import Products from  './Components/Products.js';
import SectionDivider from './Components/SectionDivider.js';
import Weather from './Components/Weather.js';
import Header from './Components/Header.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/*
        <header className="App-header" style={{backgroundColor: '#011c39'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        */}
        <Header className="Header"/>
        <TodoList />
        <SectionDivider color='#1ba78c'/>
        <Products />
        <SectionDivider color='#7bbf3f'/>
        <Weather />
        <SectionDivider color='#545454'/>
        <footer className="App-header" style={{backgroundColor: 'black'}}>
        </footer>
      </div>
    );
  }
}

export default App;

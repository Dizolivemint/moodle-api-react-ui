import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GetUsers from './components/GetUsers'
import GetCourses from './components/GetCourses'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetUsers />
        <GetCourses />
      </header>
    </div>
  );
}

export default App;

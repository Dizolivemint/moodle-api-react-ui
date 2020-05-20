import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GetUsers from './components/GetUsers'
import GetCourses from './components/GetCourses'
import ImportCourse from './components/ImportCourse'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetUsers />
        <GetCourses />
        <ImportCourse />
      </header>
    </div>
  );
}

export default App;

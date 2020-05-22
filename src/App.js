import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AdminUi from './components/AdminUi'

const store = configureStore()
window.store = store

function App() {
  return (
    <Provider store={store} className="App">
      <header className="App-header">
        <AdminUi />
      </header>
    </Provider>
  );
}

export default App;

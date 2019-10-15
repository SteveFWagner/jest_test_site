import React from 'react';
import './App.css';
import Nav from './components/Nav'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      {routes}
    </div>
  );
}

export default App;

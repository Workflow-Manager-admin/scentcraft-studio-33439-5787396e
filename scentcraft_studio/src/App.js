import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-flex" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">✽</span> <span className="sc-logo-title">ScentCraft Studio</span>
            </div>
            <button className="btn">My Account</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="hero">
          <div className="container">
            <div className="subtitle">Create Your Luxury Perfume</div>
            <h1 className="title sc-logo-title">ScentCraft Studio</h1>
            <div className="description">
              Personalize your scent, bottle, and packaging. Experience bespoke fragrance artistry.
            </div>
          </div>
        </div>
        <MainContainer />
      </main>
    </div>
  );
}

export default App;
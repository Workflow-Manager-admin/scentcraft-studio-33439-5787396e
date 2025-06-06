import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> ScentCraft Studio
            </div>
            <button className="btn" style={{
              background: "#bfa16c", borderColor: "#bfa16c"
            }}>My Account</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="hero" style={{
          padding: "120px 0 24px 0",
          background: "linear-gradient(90deg, #f8f4f0 0%, #fff9eb 100%)",
          color: "#bfa16c",
          minHeight: 220
        }}>
          <div className="container">
            <div className="subtitle" style={{ color: "#bfa16c", fontWeight: "600", fontSize: "1.2rem", marginBottom: 4 }}>Create Your Luxury Perfume</div>
            <h1 className="title" style={{
              color: "#bfa16c",
              fontSize: "2.6rem",
              margin: "0 0 10px 0"
            }}>ScentCraft Studio</h1>
            <div className="description" style={{
              maxWidth: 520,
              color: "#bfa16c",
              fontWeight: 400,
              marginBottom: 0
            }}>
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
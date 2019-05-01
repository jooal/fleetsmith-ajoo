import React from 'react';
import './App.css';
import Header from "../src/components/Header"
import LightboxPage from './components/LightboxPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header />
       <LightboxPage />
       <Footer />
       </div>
  );
}

export default App;

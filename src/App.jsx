import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <h1>Threads</h1>
          <p>Threads is a new social media platform developed by Meta, the company behind Facebook and Instagram. It is designed to be a more private and intimate space for users to connect with their close friends and family.</p>
          <button className="download-btn">Download Now</button>
        </div>
        <div className="right">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </div>
  )
}
export default App


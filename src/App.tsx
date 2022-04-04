import React, { useCallback, useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { API } from "./client"
import { LocationList } from "./Components/LocationList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Confidence</span>
      </header>
      <main>
        <LocationList />
      </main>
    </div>
  )
}

export default App

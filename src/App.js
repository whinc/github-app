import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <div style={{display: 'flex', height: '44px', backgroundColor: 'black', alignItems: 'center', paddingLeft: '10px'}}>
          <span style={{color: 'white', fontSize: '18px'}}>title</span>
        </div>
        <div style={{flexGrow: 1}}>A</div>
        <div style={{display: 'flex', color: 'red', height: '44px', alignItems: 'center'}}>
          <button style={{flexGrow: 1, height: '100%'}}>A</button>
          <button style={{flexGrow: 1, height: '100%'}}>B</button>
          <button style={{flexGrow: 1, height: '100%'}}>C</button>
          <button style={{flexGrow: 1, height: '100%'}}>D</button>
        </div>
      </div>
    )
  }
}

export default App

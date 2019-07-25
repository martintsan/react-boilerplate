import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import '@babel/polyfill'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)

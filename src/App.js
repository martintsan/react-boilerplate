import React, { Component } from 'react'
import { styled } from 'styled-components'

const Title = styled.h1`
  font-family: 'Helvetica,Arial,sans-serif';
  font-size: 24px;
  color: palevioletred;
`

class App extends Component {
  render() {
    return (
      <div>
        <Title>Hello React!</Title>
      </div>
    )
  }
}

export default App

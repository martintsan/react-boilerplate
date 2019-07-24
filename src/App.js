import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Helvetica,Arial,sans-serif';
  font-size: 24px;
  color: palevioletred;
`

export default class App extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <Title>Hello React!</Title>
        <h2>Count: {this.state.count} </h2>
      </div>
    )
  }
}

import React, { Component, Suspense } from 'react'
const Warning = React.lazy(() => import('./Warning'))
import styled, { css } from 'styled-components'

const Title = styled.h1`
  font-family: 'Helvetica,Arial,sans-serif';
  font-size: 24px;
  color: palevioletred;
`

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      border-color: palevioletred;
      background: palevioletred;
      color: white;
    `}
`

class App extends Component {
  state = {
    count: 0
  }

  increment() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }))
  }

  render() {
    return (
      <div>
        <Title>Hello React!</Title>
        <h2>Count: {this.state.count} </h2>
        {this.state.count > 10 ? (
          <Suspense fallback={null}>
            <Warning />
          </Suspense>
        ) : null}
        <Button primary onClick={() => this.increment()}>
          +
        </Button>
        <Button onClick={() => this.decrement()}>-</Button>
        <img src="./log/png" alt="User"/>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Header } from './Header'
import { Meta } from './Meta'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
    red: '#e30052',
    brown: '#67010E',
    black: '#000',
    lightgrey: '#e1e1e1',
    offWhite: '#ededed',
    maxWidth: '1000px',
}

const MyButton = styled.button`
  -webkit-appearance: button;
  -webkit-font-smoothing: antialiased;
  background-color: #000;
  background-image: none;
  border: 0 solid transparent;
  border-radius: 2px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  height: 44px;
  letter-spacing: .1em;
  line-height: 0;
  margin: 0 0 25px;
  outline: none;
  padding: 6px 20px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  vertical-align: top;
  width: auto;

`;

const StyledPage = styled.div`
    background-color: #fff;
    color: #000;
`

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta/>
                    <Header/>
                    <MyButton>Click me</MyButton>
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page

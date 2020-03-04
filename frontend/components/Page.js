import React, { Component } from 'react'
import { Header } from './Header'
import { Meta } from './Meta'
import styled from 'styled-components'

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


class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
                <Header/>
                <MyButton>Click me</MyButton>
                <p>This is the page component</p>
                    {this.props.children}
            </div>
        )
    }
}

export default Page

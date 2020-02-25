import React from 'react'
import App from 'next/app';
import Page from '../components/Page'

class MyApp extends App {
    render() {
        const { Component } = this.props
        return (
                <div>
                    <p>Hey I'm on every page</p>
                    <Component />
                </div>
        )
    }
}


export default MyApp
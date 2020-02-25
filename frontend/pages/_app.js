import App, { Container } from 'next/app';
import Page from '../components/Page'

class MyApp extends App {
    render() {
        const { Component } = this.props
        return (
            <Container>
                <p>Hey I'm on every page</p>
                <Component/>
            </Container>
        )
    }
}


export default MyApp
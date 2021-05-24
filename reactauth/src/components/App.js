import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"
import Dashboard from "./Dashboard"

function App() {
    return (
        <div className='wrapper'>
            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand href='/'>DASHBOARD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id='nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/signup'>signup</Nav.Link>
                            <Nav.Link href='https://www.youtube.com/watch?v=PKwu15ldZ7k' target="_blank">source</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container
                className='d-flex justify-content-center'>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route path='/login' component={Login} />
                            <Route path='/signup' component={Signup} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </Container>
        </div>
    )
}

export default App

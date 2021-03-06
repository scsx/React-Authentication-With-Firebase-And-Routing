import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"
import Dashboard from "./Dashboard"
import ForgotPassword from "./ForgotPassword"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Signup from "./Signup"
import UpdateProfile from "./UpdateProfile"
import AccordionCpt from "./Accordion"
import D3ex1 from "./D3-1"
import Pagination from "./Pagination/Pagination"

function App() {
    return (
        <div className='wrapper'>
            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand href='/'>REACT AUTH</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id='nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/signup'>signup</Nav.Link>
                            <Nav.Link href='/login'>login</Nav.Link>
                            <Nav.Link href='/pagination'>pagination</Nav.Link>
                            <Nav.Link
                                href='https://www.youtube.com/watch?v=PKwu15ldZ7k'
                                target='_blank'>
                                source
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className='d-flex justify-content-center'>
                <Router>
                    <AuthProvider>
                        <Switch>
                            {/* Login needed */}
                            <PrivateRoute
                                exact
                                path='/'
                                component={Dashboard}
                            />
                            <PrivateRoute
                                path='/update-profile'
                                component={UpdateProfile}
                            />
                            <PrivateRoute
                                path='/accordion'
                                component={AccordionCpt}
                            />
                            <PrivateRoute path='/d3ex1' component={D3ex1} />
                            {/* Free to visit */}
                            <Route path='/login' component={Login} />
                            <Route path='/signup' component={Signup} />
                            <Route path='/pagination' component={Pagination} />
                            <Route
                                path='/forgot-password'
                                component={ForgotPassword}
                            />
                        </Switch>
                    </AuthProvider>
                </Router>
            </Container>
        </div>
    )
}

export default App

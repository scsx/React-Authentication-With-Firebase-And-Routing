import React, { useState } from "react"
import {
    Button,
    Jumbotron,
    Alert,
    Row,
    Col,
    Card,
    ButtonGroup,
    ListGroup,
    Accordion
} from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function AccordionCpt() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <Jumbotron className='fullpage'>
            <h1 className='text-gold'>Accordion</h1>
            {error && <Alert variant='danger'>{error}</Alert>}

            <Row>
                <Col xs={6} md={4}>
                    <Card className='userarea'>
                        <Card.Body>
                            <h3>WELCOME</h3>
                            <p>
                                <b>{currentUser.email}</b>
                            </p>

                            <ButtonGroup className='w-100 text-center'>
                                <Link
                                    className='btn btn-dark'
                                    to='/update-profile'>
                                    Update profile
                                </Link>
                                <Button variant='light' onClick={handleLogout}>
                                    Log out
                                </Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    {/* Only dummy content from here */}
                    <ListGroup as='ul' className='menu'>
                        <ListGroup.Item as='li'>
                            <Link exact='true' to='/'>
                                Dashboard
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item as='li' active>
                            <Link to='/accordion'>Accordion</Link>
                        </ListGroup.Item>
                        <ListGroup.Item as='li'>
                            <Link to='/motion'>React Motion</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={6} md={8}>
                    <main>
                        <h2>Entire Header Clickable</h2>
                        <p>
                            Each of the Card components in the Accordion can
                            have their entire header clickable, by setting the
                            AccordionToggle's underlying component to be a
                            CardHeader component.
                        </p>
                        <Accordion defaultActiveKey='0'>
                            <Card className="bg-light text-dark">
                                <Accordion.Toggle as={Card.Header} eventKey='0'>
                                    <h5>Click me!</h5>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='0'>
                                    <Card.Body>
                                        <p>Accordions provide a way to restrict Card components to only open one at a time.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="bg-light text-dark">
                                <Accordion.Toggle as={Card.Header} eventKey='1'>
                                    <h5>Click me!</h5>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='1'>
                                    <Card.Body>
                                        <p>Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </main>
                </Col>
            </Row>
        </Jumbotron>
    )
}

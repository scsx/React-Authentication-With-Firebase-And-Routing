import React, { useState } from "react"
import { Button, Jumbotron, Alert, ListGroup, Row, Col } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push("/login")
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <Jumbotron className='dashboard'>
            <h1 className='text-gold'>Dashboard</h1>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Row>
                <Col xs={6} md={4}>
                    <ListGroup className="mt-3 mb-5">
                        <ListGroup.Item>
                            <b>Email</b>
                        </ListGroup.Item>
                        <ListGroup.Item>{currentUser.email}</ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/update-profile">Update profile</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <p>
                <Button variant='primary' onClick={handleLogout}>
                    Log out
                </Button>
            </p>
        </Jumbotron>
    )
}

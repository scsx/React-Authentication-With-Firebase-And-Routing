import React, { useRef, useState } from "react"
import { Form, Button, ButtonGroup, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    // Loading to prevent multiple clicks
    const [loading, setLoading] = useState(false)
    // Dev only
    const [dummyUser, setDummyUser] = useState({})

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("") // Reset msg
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to create account")
        }
        setLoading(false)
    }
    // Dev only
    function fillDevUser() {
        setDummyUser({
            email: "tom@email.com",
            pass: "09bjhieb"
        })
    }

    return (
        <>
            <div className='signup'>
                <Card>
                    <Card.Body>
                        <h1>Log in</h1>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form className='signform' onSubmit={handleSubmit}>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    ref={emailRef}
                                    value={dummyUser.email}
                                    required
                                />
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    ref={passwordRef}
                                    value={dummyUser.pass}
                                    required
                                />
                            </Form.Group>
                            <ButtonGroup className='w-100 text-center mt-4'>
                                <Button
                                    variant='outline-dark'
                                    size='lg'
                                    onClick={fillDevUser}>
                                    User 1 <small>[dev]</small>
                                </Button>
                                <Button
                                    variant='dark'
                                    size='lg'
                                    disabled={loading}
                                    type='submit'>
                                    Log In
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2 text-gold'>
                    Need an account?{" "}
                    <b>
                        <Link className='text-white' to='/signup'>
                            Sign up
                        </Link>
                    </b>
                </div>
            </div>
        </>
    )
}

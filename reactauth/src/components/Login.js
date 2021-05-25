import React, { useRef, useState } from "react"
import { Form, Button, ButtonGroup, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    // Loading to prevent multiple clicks
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("") // Reset msg
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/") // Log in successfull
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
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
                                    required
                                />
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    ref={passwordRef}
                                    required
                                />
                            </Form.Group>
                            <ButtonGroup className='w-100 text-center mt-4'>
                                <Button
                                    variant='dark'
                                    size='lg'
                                    disabled={loading}
                                    type='submit'>
                                    Log in
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2'>
                    <b>
                        <Link className='text-white' to='/forgot-password'>
                            Forgot password?
                        </Link>
                    </b>
                </div>
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

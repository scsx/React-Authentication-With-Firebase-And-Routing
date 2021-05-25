import React, { useRef, useState } from "react"
import { Form, Button, ButtonGroup, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    // Loading to prevent multiple clicks
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match") // Exit with return
        }

        try {
            setError("") // Reset msg
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/") // Log in successfull
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }

    return (
        <>
            <div className='signup'>
                <Card>
                    <Card.Body>
                        <h1>Sign Up</h1>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form className='signform' onSubmit={handleSubmit}>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    ref={emailRef}
                                    autoComplete='off'
                                    required
                                />
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    ref={passwordRef}
                                    autoComplete='off'
                                    required
                                />
                            </Form.Group>
                            <Form.Group id='password-confirm'>
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control
                                    type='password'
                                    ref={passwordConfirmRef}
                                    required
                                />
                            </Form.Group>
                            <ButtonGroup className='w-100 text-center mt-4'>
                                <Button
                                    variant='dark'
                                    size='lg'
                                    disabled={loading}
                                    type='submit'>
                                    Sign Up
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2 text-gold'>
                    Already have an account?{" "}
                    <b>
                        <Link className='text-white' to='/login'>
                            Log in
                        </Link>
                    </b>
                </div>
            </div>
        </>
    )
}

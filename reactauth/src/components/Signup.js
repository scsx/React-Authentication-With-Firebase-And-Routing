import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    // Loading to prevent multiple clicks
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match") // Exit with return
        }

        try {
            setError("") // Reset msg
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to create account")
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h1>Sign Up</h1>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {JSON.stringify(currentUser)}
                    <Form className='signform' onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                //value='test@email.com'
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
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordConfirmRef}
                                required
                            />
                        </Form.Group>
                        <Button
                            className='w-100 text-center mt-4'
                            variant='dark'
                            size='lg'
                            disabled={loading}
                            type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2 text-gold'>
                Already have an account? <b className='text-white'>Log In</b>
            </div>
        </>
    )
}

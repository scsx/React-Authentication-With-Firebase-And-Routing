import React, { useRef, useState } from "react"
import { Form, Button, ButtonGroup, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("") // Reset msg
            setMessage("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for instructions")
        } catch {
            setError("Email not recognized!")
        }
        setLoading(false)
    }

    return (
        <>
            <div className='signup'>
                <Card>
                    <Card.Body>
                        <h1>Forgot password</h1>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        {message && <Alert variant='success'>{message}</Alert>}
                        <Form className='signform' onSubmit={handleSubmit}>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    ref={emailRef}
                                    required
                                />
                            </Form.Group>
                            <ButtonGroup className='w-100 text-center mt-4'>
                                <Button
                                    variant='dark'
                                    size='lg'
                                    disabled={loading}
                                    type='submit'>
                                    Reset password
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2 text-gold'>
                    <b>
                        <Link className='text-white' to='/login'>
                            Log in
                        </Link>
                    </b>
                    {" "}/{" "}
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

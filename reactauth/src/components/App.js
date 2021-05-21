import React from "react"
import { Container, Jumbotron } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import Signup from "./Signup"

function App() {
    return (
        <AuthProvider>
            {/* <Jumbotron>
                <Container>
                    <h2>
                        React Authentication Crash Course With Firebase And
                        Routing
                    </h2>
                </Container>
            </Jumbotron> */}
            <Container
                className='d-flex justify-content-center'
                style={{ minHeight: "100vh" }}>
                <div className='w-100' style={{ maxWidth: "500px" }}>
                    <Signup />
                </div>
            </Container>
        </AuthProvider>
    )
}

export default App

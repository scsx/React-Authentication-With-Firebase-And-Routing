import React from "react"
import { Button, Jumbotron } from "react-bootstrap"

export default function Dashboard() {
    return (
        <Jumbotron className="dashboard">
            <h1 className="text-gold">Dashboard</h1>
            <p>
                <Button variant='primary'>Learn more</Button>
            </p>
        </Jumbotron>
    )
}

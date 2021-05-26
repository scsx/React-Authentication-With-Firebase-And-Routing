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
    Table
} from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Dashboard() {
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
            <h1 className='text-gold'>Dashboard</h1>
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
                        <ListGroup.Item as='li' active>
                            <Link exact="true" to='/'>
                                Dashboard
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item as='li'>
                            <Link to='/accordion'>
                                Accordion
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item as='li'>
                            <Link to='/motion'>
                                React Motion
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={6} md={8}>
                    <main>
                        <h2>What is a data dashboard?</h2>
                        <p>
                            A <b>data dashboard</b> is an information management
                            tool that visually tracks, analyzes and displays{" "}
                            <a
                                target='_blank'
                                rel="noopener noreferrer"
                                href='https://www.klipfolio.com/resources/kpi-examples'>
                                key performance indicators (KPI)
                            </a>
                            , metrics and key data points to monitor the health
                            of a business, department or specific process. They
                            are customizable to meet the specific needs of a
                            department and company. Behind the scenes, a
                            dashboard connects to your files, attachments,
                            services and API’s, but on the surface displays all
                            this data in the form of tables, line charts, bar
                            charts and gauges. A data dashboard is the most
                            efficient way to track multiple data sources because
                            it provides a central location for businesses to
                            monitor and analyze performance. Real-time
                            monitoring reduces the hours of analyzing and long
                            line of communication that previously challenged
                            businesses.
                        </p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan='2'>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p>
                            Firstly, users need to know that dashboard
                            definition is dependent on the role it plays within
                            an organization. Everyone uses data dashboards
                            differently. Not all business dashboards serve the
                            same purpose, which is why it’s important users
                            understand what KPIs to track and why. This section
                            will answer the following questions:
                        </p>
                        <ul>
                            <li>
                                What kinds of business questions do dashboards
                                answer?
                            </li>
                            <li>
                                What type of data are tracked on dashboards?
                            </li>
                            <li>How are dashboards interactive?</li>
                        </ul>
                    </main>
                </Col>
            </Row>
        </Jumbotron>
    )
}

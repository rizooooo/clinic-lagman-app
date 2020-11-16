import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const FullScreenLayout = ({ children }) => {
    return (
        <Container style={{ height: '100vh' }}>
            <Row className='h-100'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FullScreenLayout

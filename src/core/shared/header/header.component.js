import React from 'react'
import { FaClinicMedical } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Input, Row } from 'reactstrap'
import items from './constants/items.data'

const Header = () => {
    return (
        <div className='bg-primary'>
            <Container>
                <Row className='align-items-center py-2'>
                    <Col>
                        <FaClinicMedical className='text-white' size={30} />
                    </Col>
                    <Col md={4} className='d-flex justify-content-between'>
                        {items && items.map(item => (
                            <Link className='text-white' key={item.name} to={item.route}>{item.name}</Link>
                        ))}
                    </Col>
                    {/* <Col>
                        <Input placeholder='Search a Movie' />
                    </Col> */}
                </Row>
            </Container>
        </div>

    )
}

export default Header

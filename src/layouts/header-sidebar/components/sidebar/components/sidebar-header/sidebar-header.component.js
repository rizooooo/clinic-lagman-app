import React from 'react'
import { FaHospitalAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const SidebarHeaderComponent = ({ sidebarToggled }) => {
    const { push } = useHistory();
    return (
        <Container className='p-0' fluid>
            <Row noGutters>
                <Col className='d-flex align-items-center justify-content-center flex-nowrap py-4 clickable' onClick={() => push('/')}>
                    <FaHospitalAlt size={20} className='text-center' color={'#fff'} />
                    {sidebarToggled &&
                        <h5 className='font-weight-bold text-white mb-0 d-md-block d-none text-nowrap ml-2'>Lagman Qualicare</h5>
                    }
                    {/* <small className='font-weight-bold'>PRECISION TECHNOLOGY PARTNERS</small> */}
                </Col>
            </Row>
        </Container>
    )
}

export default SidebarHeaderComponent

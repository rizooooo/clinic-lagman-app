import React, { useContext } from 'react'
import { FaBars, FaClinicMedical, FaDoorOpen, FaHamburger, FaSignOutAlt, FaSync, FaUserNurse } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import { Button, Col, Container, Input, Row } from 'reactstrap'
import items from './constants/items.data'

const Header = ({ sidebarHandler }) => {
    const [toggleSidebar, setToggleSidebar] = sidebarHandler;
    const { push } = useHistory();
    return (
        <div className='bg-white border-bottom'>
            <Container fluid>
                <Row className='py-2'>
                    <Col>
                        <FaBars style={{ cursor: 'pointer' }} onClick={() => setToggleSidebar(!toggleSidebar)} />
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <div className='d-flex align-items-center'>
                            <FaUserNurse className='mr-2' />
                            <b className='text-primary'>Dr. John Doe</b>
                        </div>
                        <div className='d-flex align-items-center ml-4'>
                            <FaSignOutAlt className='mr-2' />
                            Logout
                        </div>

                    </Col>
                </Row>
                {/* <Row className='align-items-center py-2'>
                    <Col className='d-flex align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0'>
                        <FaClinicMedical onClick={() => push('/')} style={{ cursor: 'pointer' }} className='text-white' size={30} />
                    </Col>
                    <Col md={10} className='d-flex justify-content-between align-items-center'>
                        {items && items.map(item => (
                            <Link className='font-weight-bold d-flex align-items-center flex-nowrap' key={item.name} to={item.route}>{item.icon} <span className='ml-md-2 d-none d-md-flex'>{item.name}</span></Link>
                        ))}
                        <Button className='d-flex align-items-center flex-nowrap'>
                            <FaSync /> <span className='d-none d-md-flex'>Sync Patients</span>
                        </Button>
                    </Col>
                </Row> */}
            </Container>
        </div>

    )
}

export default Header

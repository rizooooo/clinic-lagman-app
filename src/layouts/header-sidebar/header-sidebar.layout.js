import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Header } from '../../core/shared';
import { Breadcrumb, Sidebar } from './components';
// import { BreadCrumbProvider } from '../../core/hooks/breadcrumb/context';

import './styles/header-sidebar.styles.scss';



const HeaderSidebarLayout = ({ children, breadcrumb }) => {
    const [toggleSidebar, setToggleSidebar] = useState(true);
    return (
        <Container fluid className='p-0 d-flex h-100'>
            <div className='sticky-top bg-info' style={{ height: '100vh' }}>
                <Sidebar sidebarToggled={toggleSidebar} />
            </div>

            <Row className='main' noGutters style={{ flex: 1 }}>
                {/* <Col className='bg-dark text-white'>
                    <Sidebar />
                </Col> */}
                <Col className='d-flex flex-column' style={{ backgroundColor: '#ebedef' }}>
                    {/* <BreadCrumbProvider>
                      
                    </BreadCrumbProvider> */}
                    <div className='sticky-top'>
                        <Header
                            sidebarHandler={[toggleSidebar, setToggleSidebar]}
                        />
                        <Breadcrumb data={breadcrumb} />
                    </div>
                    <div className='mt-3'>
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderSidebarLayout

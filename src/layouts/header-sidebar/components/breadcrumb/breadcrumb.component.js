import React, { useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link, useHistory, useLocation, } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { startCase } from 'lodash';
// import { BreadcrumbContext } from '../../../../core/hooks/breadcrumb/context';

const BreadcrumbComponent = ({ data: bc }) => {
    //const { breadcrumbState: { active = null } } = useContext(BreadcrumbContext);
    const location = useLocation();
    const { push } = useHistory();
    const { pathname } = location;

    const pathnames = pathname.split("/").filter(x => x);



    return (
        <Container className='p-0 bg-white shadow-sm' fluid>
            <Row noGutters className='py-2 px-3 border-bottom'>
                <Col className='d-flex justify-content-start align-items-center'>
                    <ol className="breadcrumb bg-transparent m-0 p-0">
                        <li className="breadcrumb-item d-flex align-items-center clickable" onClick={() => push('/')}>
                            <FaHome />
                        </li>
                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                            const isLast = index === pathnames.length - 1;
                            return (
                                <li key={name} className={`breadcrumb-item ${isLast ? 'active' : undefined} text-capitalize`}>
                                    <Link to={routeTo}>
                                        {startCase(name)}
                                        </Link>
                                        
                                    {/* <Link>{startCase(name)}</Link> */}

                                </li>
                            )
                        })}
                        {/* {crumbs && crumbs.map((c: any, index: number) => (
                            <li key={c.name} className={`breadcrumb-item ${crumbs.length - 1 === index ? 'active' : undefined}`}>
                                {c.route && crumbs.length - 1 !== index ? <Link to={c.route}>
                                    {c.name}
                                </Link> : c.name}
                            </li>
                        ))} */}
                    </ol>
                </Col>
            </Row>
        </Container>
    )
}

export default BreadcrumbComponent

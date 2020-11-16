import React, { useEffect, useState } from 'react'
import { FaCalendar, FaCalendarDay, FaHeartbeat, FaMapPin, FaNotesMedical, FaPhone, FaPlus, FaUserAstronaut } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom'
import { Button, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row } from 'reactstrap';
import { FormActions } from '../../../../core/actions';
import { PatientDB } from '../../../../core/models';
import { FormBuilder } from '../../../../core/shared';
import { FormSchema } from './constants';

const ViewPatient = () => {
    const { id } = useParams();
    const { push } = useHistory()
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        init();
    }, [id])

    const init = async () => {
        setPatient(await PatientDB.FIND_PATINET(id));
        // const res = 
        // console.log(res, 'RES')
    }

    const formHandler = async ({ action, data }) => {
        switch (action) {
            case FormActions.ON_SUBMIT:
                console.log('FORM ONSUBMIT', data)
                const res = await PatientDB.UPDATE_PATIENT({ ...patient, ...data });
                push('/')
                break;
            default:
                break;
        }
    }

    if (!patient) {
        return <h3>Loading...</h3>
    }
    return (
        <Container fluid>
            <div className='bg-white rounded shadow-sm border p-3'>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <div className='d-flex flex-column'>
                                    <small>Tomorrow at <b>09:30AM - 10:00AM</b></small>
                                    <small className='text-primary font-weight-bold mt-0'>NEXT APPOINTMENT</small>
                                </div>
                            </Col>
                            <Col>
                                <div className='d-flex flex-column'>
                                    <small>A year ago</small>
                                    <small className='text-primary font-weight-bold mt-0'>LAST APPOINTMENT</small>
                                </div>
                            </Col>
                            <Col>
                                <div className='d-flex flex-column'>
                                    <small>An hour ago</small>
                                    <small className='text-primary font-weight-bold mt-0'>LAST ACTIVITY</small>
                                </div>
                            </Col>
                            <Col>
                                <Button color={'primary'} outline className='font-weight-bold'>Edit Patient Profile</Button>
                            </Col>
                        </Row>
                        <hr />
                        {/* {JSON.stringify(patient)} */}
                        <Row className='mt-4'>
                            <Col md={4}>
                                <Row>
                                    <Col xs={2} className='d-flex justify-content-center align-items-center'>
                                        <FaUserAstronaut size={50} />
                                    </Col>
                                    <Col xs={10}>
                                        <h5 className='font-weight-bold'>{patient.last_name}, {patient.first_name}</h5>
                                        <p className='mb-0'>{patient.date_of_birth}</p>
                                        <p className='mb-0'>{patient.age} y/o, {patient.gender}</p>
                                    </Col>
                                </Row>

                            </Col>
                            <Col md={4} className='d-flex flex-column'>
                                {/* <span className='text-info font-weight-bold'>ID: {patient._id}</span> */}
                                <span className='d-flex align-items-center'>
                                    <FaPhone className='mr-3' />
                                    <b>{patient.mobile_no} - {patient.telephone_no}</b>
                                </span>
                                <span className='d-flex align-items-center'>
                                    <FaMapPin className='mr-3' />
                                    <b>{patient.address}</b>
                                </span>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </div>

            <Row className='mt-5'>
                <Col>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='font-weight-bold'>List of Appointments</h5>
                        <small className='text-info'>VIEW ALL</small>
                    </div>
                    {/* <div className='bg-white rounded shadow-sm border p-3'>
                       
                    </div> */}
                    <ListGroup>
                        <ListGroupItem>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <h5 className='font-weight-bold mb-0 d-flex align-items-center'>
                                    <FaCalendarDay className='mr-2' />                                    Appointment One
                                    </h5>
                                <small className='text-muted'>3 months ago</small>
                            </div>
                            <p className='mb-0'>March 23, 2020 - 09:00am to 09:30am</p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <h5 className='font-weight-bold mb-0 d-flex align-items-center'>
                                    <FaCalendarDay className='mr-2' />                                    Appointment One
                                    </h5>
                                <small className='text-muted'>3 months ago</small>
                            </div>
                            <p className='mb-0'>March 23, 2020 - 09:00am to 09:30am</p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <h5 className='font-weight-bold mb-0 d-flex align-items-center'>
                                    <FaCalendarDay className='mr-2' />                                    Appointment One
                                    </h5>
                                <small className='text-muted'>3 months ago</small>
                            </div>
                            <p className='mb-0'>March 23, 2020 - 09:00am to 09:30am</p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <h5 className='font-weight-bold mb-0 d-flex align-items-center'>
                                    <FaCalendarDay className='mr-2' />                                    Appointment One
                                    </h5>
                                <small className='text-muted'>3 months ago</small>
                            </div>
                            <p className='mb-0'>March 23, 2020 - 09:00am to 09:30am</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='font-weight-bold'>Medications</h5>
                        <small className='text-info'>VIEW ALL</small>
                    </div>
                    {/* <div className='bg-white rounded shadow-sm border p-3'>
                       
                    </div> */}
                    <ListGroup>
                        <ListGroupItem>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <h5 className='font-weight-bold mb-0 d-flex align-items-center'>
                                    <FaNotesMedical className='mr-2
                                    
                                    
                                    
                                    ' />                                   Medication/s
                                    </h5>
                                <small className='text-muted'>3 months ago</small>
                            </div>
                            <span className='mb-0 text-primary'>
                                Drink 3 times a day, etc.
                            </span>
                            <ul className='pl-3'>
                                <li>
                                    Paracetamol
                                </li>
                                <li>
                                    Biogesic
                                </li>
                            </ul>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='font-weight-bold'>Diagnostics</h5>
                        <small className='text-info'>VIEW ALL</small>
                    </div>
                    {/* <div className='bg-white rounded shadow-sm border p-3'>
                       
                    </div> */}
                    <ListGroup>
                    <ListGroupItem>
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <h5 className='font-weight-bold mb-0 d-flex align-items-center'>
                                    <FaHeartbeat className='mr-2
                                    
                                    
                                    
                                    ' />                                   Sick, fever
                                    </h5>
                                <small className='text-muted'>3 months ago</small>
                            </div>
                            <span className='mb-0 text-primary'>
                            Due to rain
                            </span>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>

        </Container>
        // <Container className='mb-5'>
        //     <Row className='py-3 justify-content-center'>
        //     <Col xs={12} sm={12} md={10}>
        //             <h3 className='text-center font-weight-bold'>Lagman Medical Clinic</h3>
        //             <p className='lead text-center'>Patient ID: {id}</p>

        //         </Col>
        //     </Row>
        //     {patient &&
        //         <Row form className='justify-content-center my-2 mb-5'>
        //           <Col xs={12} sm={10} md={7} lg={5} xl={5}>
        //                 <FormBuilder
        //                     defaultValues={patient}
        //                     handler={formHandler}
        //                     config={FormSchema()}
        //                 />
        //             </Col>
        //         </Row>
        //     }

        // </Container>
        // <Container fluid className='pb-5'>
        //     <div className='p-3 bg-white rounded shadow-sm'>
        //         <Row>
        //             <Col>
        //                 <h4 className='font-weight-bold mb-1 '>
        //                     Add a Patient
        //             </h4>
        //                 <p>Enter Patient's Details</p>
        //                 <hr />
        //             </Col>
        //         </Row>
        //         {patient &&
        //             <Row>
        //                 <Col>
        //                     <FormBuilder
        //                      defaultValues={patient}
        //                         handler={formHandler}
        //                         config={FormSchema()}
        //                         cancelButton={true}
        //                         cancelHandler={() => push('/patient')}
        //                     />
        //                 </Col>
        //             </Row>
        //         }
        //     </div>

        // </Container>
    )
}

export default ViewPatient

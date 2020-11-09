import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaFemale, FaLocationArrow, FaMale, FaMapMarked, FaMarker, FaRegEye, FaUser } from 'react-icons/fa';
import { Button, Col, Container, Input, Row } from 'reactstrap';
import { PatientDB } from '../../core/models';
import { Card } from '../../core/shared';

const PatientList = () => {

    const [patients, setPatients] = useState([]);

    const init = async () => {
        PatientDB.SUBSCRIBE(async () => {
            getPatients()
        });

        getPatients();
    }

    useEffect(() => {
        init();
    }, [PatientDB, patients, init])

    const getPatients = async () => {
        setPatients(await PatientDB.GET_PATIENTS());
    }

    return (
        <div>
            <Container>
                <Row className='py-3 justify-content-center'>
                    <Col md={4}>
                        <h3 className='text-center font-weight-bold'>Lagman Medical Clinic</h3>
                        <p className='lead text-center'>List of Patients</p>

                        <Input className='mt-3' placeholder='Search Patients' />
                    </Col>
                </Row>

                <Row className='row-cols-3 mt-3'>
                    {patients && patients.rows && patients.rows.map(p => (
                        <Col>
                            <Card>
                                <div className='d-flex align-items-center'>
                                    <FaUser className='text-primary mr-2' /><b>{p.doc.first_name} {p.doc.last_name}</b>
                                </div>
                                <div className='d-flex align-items-center my-2'>
                                    <FaLocationArrow className='text-primary mr-2' /><b>{p.doc.address}</b>
                                </div>
                                <div className='d-flex align-items-center'>
                                    {p.doc.gender === 'Male' ? <FaMale size={20} /> : <FaFemale size={20} />}
                                    <b>{p.doc.gender}</b>
                                    {/* <FaLocationArrow className='text-primary mr-2' /><b>{p.doc.address}</b> */}
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Button outline color={'primary'} className='font-weight-bold'><FaRegEye /> View Patient</Button>
                                </div>
                            </Card>


                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}

export default PatientList

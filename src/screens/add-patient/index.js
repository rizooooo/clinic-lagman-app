import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import { FormActions } from '../../core/actions'
import { PatientDB } from '../../core/models'
import { FormBuilder } from '../../core/shared'
import { FormSchema } from './constants'

const AddPatient = () => {
    const { push } = useHistory();

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        console.log(await PatientDB.GET_PATIENTS());
    }


    const formHandler = async ({ action, data }) => {
        switch (action) {
            case FormActions.ON_SUBMIT:
                console.log('FORM ONSUBMIT', data)
                const res = await PatientDB.ADD_PATIENT(data);
               push('/')
                break;
            default:
                break;
        }
    }


    return (
        <Container>
             <Row className='py-3 justify-content-center'>
                    <Col xs={12} sm={12} md={10}>
                        <h3 className='text-center font-weight-bold'>Lagman Medical Clinic</h3>
                        <p className='lead text-center'>Add a Patient</p>

                    </Col>
                </Row>
            <Row form className='justify-content-center my-2'>
                <Col xs={12} sm={10} md={7} lg={5} xl={5}>
                    <FormBuilder
                        handler={formHandler}
                        config={FormSchema()}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AddPatient

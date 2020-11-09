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
            <Row form className='justify-content-center my-5'>
                <Col md={5}>
                    <h4 className='font-weight-bold mb-3'>Add a Patient</h4>
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

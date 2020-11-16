import React, { useEffect } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import { FormActions } from '../../../../core/actions'
import { PatientDB } from '../../../../core/models'
import { FormBuilder } from '../../../../core/shared'
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
        <Container fluid className='pb-5'>
            <div className='p-3 bg-white rounded shadow-sm'>
                <Row>
                    <Col>
                        <h4 className='font-weight-bold mb-1 '>
                            Add a Patient
                        </h4>
                        <p>Enter Patient's Details</p>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormBuilder
                            handler={formHandler}
                            config={FormSchema()}
                            cancelButton={true}
                            cancelHandler={() => push('/patient')}
                        />
                    </Col>
                </Row>
            </div>

        </Container>
    )
}

export default AddPatient

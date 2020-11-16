import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap';
import { FormActions } from '../../core/actions';
import { PatientDB } from '../../core/models';
import { FormBuilder } from '../../core/shared';
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
                const res = await PatientDB.UPDATE_PATIENT({ ...patient, ...data  });
                push('/')
                break;
            default:
                break;
        }
    }


    return (
        <Container className='mb-5'>
            <Row className='py-3 justify-content-center'>
            <Col xs={12} sm={12} md={10}>
                    <h3 className='text-center font-weight-bold'>Lagman Medical Clinic</h3>
                    <p className='lead text-center'>Patient ID: {id}</p>

                </Col>
            </Row>
            {patient &&
                <Row form className='justify-content-center my-2 mb-5'>
                  <Col xs={12} sm={10} md={7} lg={5} xl={5}>
                        <FormBuilder
                            defaultValues={patient}
                            handler={formHandler}
                            config={FormSchema()}
                        />
                    </Col>
                </Row>
            }

        </Container>
    )
}

export default ViewPatient

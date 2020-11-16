import React from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { Images } from '../../core/constants'
import { FormBuilder } from '../../core/shared'
import { FormSchema } from './constants'

const SignIn = () => {
    const { push } = useHistory();
    return (
        <>
            <Row className='justify-content-center'>
                <Col md={4}>
                    <img width='100%' src={Images.Clinic} />
                </Col>
            </Row>
            <Row className='w-100 justify-content-center mt-3'>
                <Col md={4}>
                    <h4 className='font-weight-bold mb-1 text-center'>Lagman Qualicare</h4>
                    <p className='lead text-center'>Please Sign In</p>

                    <FormBuilder
                        config={FormSchema()}
                        cancelButton={true}
                        cancelHandler={() => push('/patient')}
                        cancelButtonText={'Go to Patients'}
                        buttonsBlock={true}
                    />
                </Col>
            </Row>

        </>
    )
}

export default SignIn

import React from 'react'
import { Button, Form as ReactStrapForm, FormGroup, Label, Input, FormText, Row, Col, FormFeedback, UncontrolledAlert, CustomInput } from 'reactstrap';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FaExclamationTriangle } from 'react-icons/fa';
import { InputTypes } from '../../types';
import { FormActions } from '../../actions';

const FormBuilder = props => {
    const {
        config,
        handler,
        formError = null,
        submitText = null,
        defaultValues = null,
        buttonsBlock = false,
        cancelButton = false,
        cancelButtonText,
        cancelHandler } = props

    console.log(defaultValues);
    const { register, handleSubmit, control, errors, formState, reset } = useForm({ mode: 'onTouched', defaultValues: defaultValues || {} });
    const { touched } = formState;

    const onSubmit = data => {
        handler({ action: FormActions.ON_SUBMIT, data, reset })
    }

    const onResetForm = () => {

    }

    return (
        <React.Fragment>
            {formError && <UncontrolledAlert color="danger" className='d-flex align-items-center font-weight-bold'>
                <FaExclamationTriangle className='mr-2' />
                {formError}
            </UncontrolledAlert>}
            <ReactStrapForm autoComplete={'off'} onSubmit={handleSubmit(onSubmit)}>
                {config.map(({ cols, row, title = null, customClass = null }) => (
                    <>
                        {title &&
                            <Row>
                                <Col>
                                    <h6 className='font-weight-bold text-primary'>{title}</h6>
                                    <hr className='mt-0' />
                                </Col>
                            </Row>
                        }

                        <Row form key={row} className={customClass}>
                            {cols.map(({ name, label, size, type, placeholder, rules, items, inputClass }) => (
                                <Col key={name} md={size}>

                                    <FormGroup>
                                        <Label for={name}>{label}</Label>
                                        {
                                            (type === InputTypes.Text || type === InputTypes.Number || type === InputTypes.Date || type === InputTypes.TextArea) &&
                                            (
                                                <Input
                                                    valid={touched.hasOwnProperty(name) && !errors.hasOwnProperty(name)}
                                                    invalid={errors.hasOwnProperty(name)}
                                                    innerRef={register(rules)}
                                                    type={type}
                                                    name={name}
                                                    className={inputClass ? inputClass : undefined}
                                                    placeholder={placeholder}
                                                    key={name}
                                                />
                                            )
                                        }
                                        {type === InputTypes.Select &&
                                            (
                                                <CustomInput
                                                    valid={touched.hasOwnProperty(name) && !errors.hasOwnProperty(name)}
                                                    invalid={errors.hasOwnProperty(name)}
                                                    innerRef={register}
                                                    name={name}
                                                    type={type}
                                                    className={inputClass ? inputClass : undefined}
                                                    id={name}
                                                    name={name}>
                                                    <option defaultValue={'Select ' + label} disabled>Select {label}</option>
                                                    {items && items.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                                                </CustomInput>
                                            )
                                        }
                                        {type === InputTypes.Radio &&
                                            (
                                                <div className='d-flex align-items-center'>
                                                    {items && items.map((l, index) => (
                                                        <CustomInput value={l.label} key={l.label} innerRef={register(rules)} className={index === 0 ? 'mr-3' : undefined} type="radio" id={l.label} name={name} label={l.label} />
                                                    ))}
                                                </div>
                                            )
                                        }
                                        <FormFeedback>{errors[name] && errors[name].message}</FormFeedback>
                                    </FormGroup>
                                </Col>
                            ))}
                        </Row>
                    </>
                ))}
                <Row form>
                    <Col className='text-right'>
                        {cancelButton &&
                            <Button block={buttonsBlock} onClick={cancelHandler} type='button' color={'danger'} className='font-weight-bold mr-2'>{cancelButtonText ? cancelButtonText : 'Cancel'}</Button>
                        }
                        <Button block={buttonsBlock} type='submit' color={'success'} className='font-weight-bold'>{submitText ? submitText : 'Submit'}</Button>
                    </Col>
                </Row>
            </ReactStrapForm>
            {/* <DevTool control={control} /> */}
        </React.Fragment>

    )
}

export default FormBuilder
import React from 'react';
import {Button, Checkbox, Container, Form} from "semantic-ui-react";
import Menu from "../../containers/Menu";
import Filter from "../../containers/Filter";
import TableSummary from "./TableSummary/TableSummary";
import EmptyCart from "../Cart/EmptyCart/EmptyCart";
import {Formik} from 'formik'
import validateFormSchema from '../../schemas/validationFormSchema'

const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    agree1: false,
};

const submitHandler = () => {
    alert('submited')
}


function Checkout(props) {
    const {cartItems} = props;

    return (
        <Container>
            <Menu/>
            <Filter/>
            {
                cartItems.length > 0
                    ? <TableSummary/>
                    : <EmptyCart/>
            }
            <p>
                ИТОГ:&nbsp;
                <span>
                    {
                        cartItems.length > 0
                            ? cartItems.reduce((total, {price, count}) => total + (price * count), 0)
                            : 0
                    }
                </span>
            </p>

            <Formik
                initialValues={initialValues}
                onSubmit={() => {
                }}
                validationSchema={validateFormSchema}
            >
                {({handleChange, values, errors, handleBlur, touched, setStatus, isValid, initialErrors, dirty, ...props}) => {
                    console.log(errors)
                    return (
                        <Form onSubmit={() => {
                        }}>
                            <Form.Field>
                                <label>ФИО</label>

                                <Form.Input
                                    value={values.name}
                                    placeholder='Name'
                                    name={'name'}
                                    onChange={handleChange}
                                    error={errors.name !== undefined
                                        ? {content: errors.name, pointing: 'below'}
                                        : false
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <Form.Input
                                    value={values.email}
                                    placeholder='Email'
                                    name={'email'}
                                    onChange={handleChange}
                                    error={errors.email !== undefined
                                        ? {content: errors.email, pointing: 'below'}
                                        : false
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Phone</label>
                                <Form.Input
                                    value={values.phoneNumber}
                                    name={'phoneNumber'}
                                    placeholder='Phone Number'
                                    onChange={handleChange}
                                    error={errors.phoneNumber !== undefined
                                        ? {content: errors.phoneNumber, pointing: 'below'}
                                        : false
                                    }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Checkbox
                                    value={values.agree1}
                                    name={'agree1'}
                                    id={'agree1'}
                                    type="checkbox"
                                    checked={values.agree1}
                                    label='Согласен с правилами оказания услуг'
                                    onChange={handleChange}
                                    error={errors.agree1 !== undefined
                                        ? {content: errors.agree1, pointing: 'after'}
                                        : false
                                    }
                                />
                            </Form.Field>
                            <Button
                                content='Перейти к оплате'
                                type='submit'
                                primary
                            />
                        </Form>
                    )
                }}
            </Formik>
        </Container>
    )
}

export default Checkout;
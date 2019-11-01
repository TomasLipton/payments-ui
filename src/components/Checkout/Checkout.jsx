import React, {Component} from 'react';
import {Button, Checkbox, Container, Form} from "semantic-ui-react";
import Menu from "../../containers/Menu";
import Filter from "../../containers/Filter";
import TableSummary from "./TableSummary/TableSummary";
import EmptyCart from "../Cart/EmptyCart/EmptyCart";

class Checkout extends Component {
    render() {
        const {cartItems} = this.props;

        return (
            <Container>
                <Menu/>
                <Filter/>
                {
                    cartItems.length > 0
                        ? <TableSummary/>
                        : <EmptyCart />
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

                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Last Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Phone</label>
                        <input placeholder='Last Name'/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions'/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions'/>
                    </Form.Field>
                    <Button
                        content='Перейти к оплате'
                        type='submit'
                        primary
                    />
                </Form>
            </Container>
        )
    }
}

export default Checkout;
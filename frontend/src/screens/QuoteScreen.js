import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder, listMyOrders } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import OrderListScreen from './OrderListScreen'

const QuoteScreen = ({ match, history }) => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [states, setStates] = useState("");
    const [total, setTotal] = useState(number1 + number2);

    function calculateTotal() {
        setTotal(number1 + number2);
    }


    return (
        <>
            <div className="number-inputs">
                <Form.Group controlId='Company'>
                    <Form.Label>Company's Rate</Form.Label>
                    <Form.Control
                        type='number'
                        value={.1}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='Gallons'>
                    <Form.Label>Gallons</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Gallons'
                        value={number2}
                        onChange={e => setNumber2(+e.target.value)}
                    ></Form.Control>
                </Form.Group>


                <Form.Group controlId='states'>
                    <Form.Label>State of Residence</Form.Label>
                    <Form.Control
                        as='select'
                        custom
                        value={states}
                        onChange={(e) => setStates(e.target.value)}>
                        <option value='AL'>ALABAMA</option> <option value='AK'>ALASKA</option> <option value='AZ'>ARIZONA</option>
                        <option value='AR'>ARKANSAS</option> <option value='CA'>CALIFORNIA</option> <option value='CO'>COLORADO</option>
                        <option value='CT'>CONNETTICUT</option> <option value='DE'>DELAWARE</option> <option value='FL'>FLORIDA</option>
                        <option value='GA'>GEORGIA</option> <option value='HI'>HAWAII</option> <option value='ID'>IDAHO</option>
                        <option value='IL'>ILLINOIS</option> <option value='IN'>INDIANA</option> <option value='IA'>IOWA</option>
                        <option value='KS'>KANSAS</option> <option value='KY'>KENTUCKY</option> <option value='LA'>LOUISIANA</option>
                        <option value='ME'>MASSACHUSETS</option> <option value='MH'>MICHIGAN</option> <option value='MD'>MARYLAND</option>
                        <option value='MA'>MAINE</option> <option value='MI'>MISSOURI</option> <option value='MN'>MINNESOTA</option>
                        <option value='MS'>MISSISSIPPI</option> <option value='MO'>MONTANA</option> <option value='NE'>NEBRASKA</option>
                        <option value='NV'>NEVADA</option> <option value='NH'>NEW HAMPSHIRE</option> <option value='NJ'>NEW JERSEY</option>
                        <option value='NM'>NEW MEXICO</option> <option value='NY'>NEW YORK</option> <option value='NC'>NORTH CAROLINA</option>
                        <option value='ND'>NORTH DAKOTA</option> <option value='OH'>OHIO</option> <option value='OK'>OKLAHOMA</option>
                        <option value='OR'>OREGON</option> <option value='PA'>PENNSYLVAINIA</option> <option value='RI'>RHODE ISLAND</option>
                        <option value='SC'>SOUTH CAROLINA</option> <option value='SD'>SOUTH DAKOTA</option> <option value='TN'>TENNESSEE</option>
                        <option value='TX'>TEXAS</option> <option value='UT'>UTAH</option> <option value='VT'>VERMONT</option>
                        <option value='VI'>VIRGINIA</option> <option value='WA'>WASHINGTON</option> <option value='WV'>WEST VIRGINIA</option>
                        <option value='WI'>WISCONSIN</option> <option value='WY'>WYOMING</option>
                    </Form.Control>
                    </Form.Group>

            </div>

            <button onClick={calculateTotal}>Add Them!</button>

            <h2>{total}</h2>

        </>
    )
}


export default QuoteScreen
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [states, setStates] = useState(shippingAddress.state)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, states }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='state'>
          <Form.Label>State</Form.Label>
          <Form.Control
            as='select'
            placeholder='Enter State'
            value={states}
            required
            onChange={(e) => setStates(e.target.value)}>
            <option>AL</option> <option>AK</option> <option>AS</option> 
            <option>AZ</option> <option>AR</option> <option>CA</option>
            <option>CO</option> <option>CT</option> <option>DE</option> 
            <option>DC</option> <option>FM</option> <option>FL</option> 
            <option>GA</option> <option>GU</option> <option>HI</option> 
            <option>ID</option> <option>IL</option> <option>IN</option> 
            <option>IA</option> <option>KS</option> <option>KY</option> 
            <option>LA</option> <option>ME</option> <option>MH</option> 
            <option>MD</option> <option>MA</option> <option>MI</option> 
            <option>MN</option> <option>MS</option> <option>MO</option> 
            <option>MT</option> <option>NE</option> <option>NV</option> 
            <option>NH</option> <option>NJ</option> <option>NM</option> 
            <option>NY</option> <option>NC</option> <option>ND</option> 
            <option>MP</option> <option>OH</option> <option>OK</option> 
            <option>OR</option> <option>PW</option> <option>PA</option> 
            <option>PR</option> <option>RI</option> <option>SC</option> 
            <option>SD</option> <option>TN</option> <option>TX</option> 
            <option>UT</option> <option>VT</option> <option>VI</option> 
            <option>VA</option> <option>WA</option> <option>WV</option> 
            <option>WI</option> <option>WY</option> <option>AE</option> 
            <option>AA</option> <option>AP</option>
          </Form.Control>
        </Form.Group>
        
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
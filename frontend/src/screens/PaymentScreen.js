import React, { useState } from 'react'
import { Form, Button, Col, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        
        <Form.Group>
        <Col>
          <ListGroup.Item>
          <Form.Label as='legend'><b>Select Method</b></Form.Label>
          
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            
             <Form.Check
              type='radio'
              label='Khalti'
              id='Khalti'
              name='paymentMethod'
              value='Khalti'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> 
            </ListGroup.Item>
          </Col>
        </Form.Group>
        <br></br>
        <ListGroup.Item align='center'> 
        <Button type='submit' variant='dark'>
          Continue
        </Button>
        </ListGroup.Item>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen

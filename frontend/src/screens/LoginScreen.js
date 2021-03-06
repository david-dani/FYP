import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}> b
        <Form.Group controlId='email'>
          <Form.Label><b>Email Address</b></Form.Label>
          <Form.Control
            type='email'
            placeholder='abc@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br></br>
        <Form.Group controlId='password'>
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control
            type='password'
            placeholder='*******'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br></br>
        <Button type='submit' variant='dark'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          <b><i>New to this website?</i></b>{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            <b>Register</b>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen

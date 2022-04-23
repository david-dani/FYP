import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { logout } from '../actions/userActions'



const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
   <header>
    <Navbar className='py-2' bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        
        <Navbar.Brand href='/'>New Creation Traders</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
          <Nav.Link href="/cart">
            <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username' href='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick ={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ): <Nav.Link href="/login">
            <i className='fas fa-user'></i> Sign In</Nav.Link>}
        </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}


export default Header
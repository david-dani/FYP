import React from 'react'
import { Container, Row, Col }  from 'react-bootstrap' 

const Footer = () => {
  const darkMode = JSON.parse(localStorage.getItem("darkTheme"));

if (darkMode) {
  document.documentElement.setAttribute("theme", "dark");
}

const setDarkTheme = (e) => {
  e.preventDefault();
  document.documentElement.setAttribute("theme", "dark");
  localStorage.setItem("darkTheme", true);
};

const setLightTheme = (e) => {
  e.preventDefault();
  document.documentElement.removeAttribute("theme");
  localStorage.setItem("darkTheme", false);
};

  return (
    <footer>
      <Container>
        <Row>
        <div className="site-theme">
          <p className="theme-heading">Site Theme</p>
          <button
            className="light-theme-btn"
            onClick={setLightTheme}
          ></button>
          <button className="dark-theme-btn" onClick={setDarkTheme}></button>
        </div>
          <Col className='text-center py-3'>
             Copyright &copy; New Creation Traders '2022'
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

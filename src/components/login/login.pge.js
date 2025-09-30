import React from "react";

import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Loginform = ({handleOnChange, handleOnSubmit, formSwitcher, username, password}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-color text-center'>Let's Get You Covered!</h1>
                &nbsp;
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group controlId="formBasicUsername" className='username'>
                        <Form.Label>Vehicle Registration Number</Form.Label>
                        <Form.Control 
                          type="username" 
                          value={username} 
                          onChange={handleOnChange} 
                          placeholder="Enter vehicle plate number" 
                          name='plate number'
                          required
                        />
                    </Form.Group>

                    &nbsp;

                    <Form.Group controlId="formBasicPassword" className='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                          type="password" 
                          value={password} 
                          onChange={handleOnChange} 
                          placeholder="Enter password" 
                          name='password'
                          required
                        />
                    </Form.Group>

                    &nbsp;
                    
                    <Button variant="primary" type="submit" className='button10'>
                        Login
                    </Button>

                    <Col className='text-left'>
                      <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password?</a>
                      &nbsp; | &nbsp;
                      <a href="/register">Don't Have Account?</a>
                    </Col>
                </Form>
            </Col>
        </Row>

        <Row>
            
        </Row>
    </Container>
  )
}

Loginform.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}
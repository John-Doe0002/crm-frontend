import React from "react";

import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const PassRessForm = ({handleOnChange, handleOnResetSubmit, formSwitcher, username}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-color text-center'>Reset Password</h1>
                &nbsp;
                <Form onSubmit={handleOnResetSubmit}>
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

                    <Button variant="primary" type="submit" className='button10'>
                        Reset Password
                    </Button>

                    <Col className='text-left'>
                      <a href="#!" onClick={() => formSwitcher('login')}>Login Now</a>
                    </Col>
                </Form>
            </Col>
        </Row>

        <Row>
            
        </Row>
    </Container>
  )
}

PassRessForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired
}
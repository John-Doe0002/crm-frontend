import React from 'react'
import {Col, Form, FormGroup, Row} from 'react-bootstrap'
import { PropTypes } from "prop-types";

export const SearchForm = ({handleOnChange, str}) => {

  return (
    <Form>
        <FormGroup as={Row}>
            <Form.Label column sm="3">
                Search:{" "}
            </Form.Label>
            <Col sm="9">
              <Form.Control 
                name='searchstr' 
                onChange={handleOnChange}
                value={str} 
                placeholder='Search here'
              />
            </Col>
        </FormGroup>
    </Form>
  )
}

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired,
}
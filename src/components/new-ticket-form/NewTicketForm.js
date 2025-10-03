import React from 'react'
import { Form, Button} from 'react-bootstrap'
import { PropTypes } from "prop-types";

import './NewTicketForm.css';

export const NewTicketForm = ({handleOnSubmit, handleOnChange, frmDt}) => {
  console.log(frmDt);
  return (
    <div className='new-ticket-form'>
      <div className='form-box'>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <h1 className='text-center'>Add New Ticket</h1>
          &nbsp;
                    <Form.Group className='subject'>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          name='subject'
                          value={frmDt.subject}
                          onChange={handleOnChange}
                          placeholder="What can we help you with?"
                          required
                        />
                    </Form.Group>

                    <div className='text1'>
                      Please input one of the following subjects: 
                      <ul>
                        <li>Vehicle Lisence</li>
                        <li>Radio License</li>
                        <li>Radio License Exemption</li>
                        <li>General Inquiry</li>
                      </ul>
                    </div>

                    <Form.Group className='date'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date" 
                          value={frmDt.ticketdate} 
                          onChange={handleOnChange} 
                          placeholder="Enter password" 
                          name='ticketdate'
                          required
                        />
                    </Form.Group>

                    <p className='text2'>
                      Enter current date.
                    </p>
                    
                    <Form.Group className='details'>
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                          as="textarea" 
                          value={frmDt.description} 
                          onChange={handleOnChange} 
                          placeholder="Tell us your situation or Attach required documents"
                          rows={5}
                          name='description'
                          required
                        />
                    </Form.Group>

                    &nbsp;

                    <Button variant="primary" type="submit" className='button10'>
                        Submit
                    </Button>
                </Form>
      </div>
    </div>
  )
};

NewTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
};
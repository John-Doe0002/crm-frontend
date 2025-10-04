import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const UpdateTicktet = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>
            Reply
        </Form.Label>
        <Form.Control
          value={msg} 
          onChange={handleOnChange}
          as="textarea" 
          row="3" 
          name='detail' 
          placeholder='Reply here...' 
        />
        <div className='text-right'>
            <Button className='buttonR' type='submit'>
              Reply
            </Button>
        </div>
    </Form>
  )
}

UpdateTicktet.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
};

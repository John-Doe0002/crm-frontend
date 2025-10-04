import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { breadcr as Breadcrumb } from '../../components/breadcrumb/breadcr'
import tickets from '../../assets/data/dummy-ticks.json'

import '../../page/ticket-list/ticket-list.css'
import { MessageHistory } from '../../components/message-history/MessageHistory'
import { UpdateTicktet } from '../../components/update-ticket/UpdateTicktet'

const ticket = tickets[0]
export const Ticket = () => {
    const [message, setMessage] = useState('')
    useEffect(() => {}, [message]);

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    };

    const handleOnSubmit = (e) => {
       alert('Form Submitted!') 
    };
  return (
    <Container>
        <Row>
            <Col className='mt-3 mb-2' style={{'fontSize': '1.3rem'}}>
              <Breadcrumb page="Ticket" />
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
              <div className='subject'>Subject :{ticket.subject}</div>
              <div className='date'>Date :{ticket.created_at}</div>
              <div className='status'>Status :{ticket.status}</div>
            </Col>
            <Col className='bttn1'>
              <Button className='button04'>Close Ticket</Button>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col>
              <MessageHistory msg={ticket.history} />
            </Col>
        </Row>
        <hr />
        <Row className='mt-2'>
            <Col>
              <UpdateTicktet msg={message}
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
              />
            </Col>
        </Row>

    </Container>
  );
};

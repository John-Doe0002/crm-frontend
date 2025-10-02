import React from 'react'
import {Container, Row, Col, Button  } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/ticket.table'
import tickets from '../../assets/data/dummy-ticks.json'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Button variant='#01b810d9' style={{'font-size': '2rem', padding: "10px 30px", backgroundColor: "#01b810d9", color: "white"}}>New Ticket</Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-2'>
                <div>
                    Total Tickets: 300
                </div>
                <div>
                    Open Tickets: 200
                </div>
                <div>
                    Closed Tickets: 100
                </div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>
                Recently Added Tickets
            </Col>
        </Row>
        <hr />
        <Row>
            <Col className='recently-added-ticket-list'>
                <TicketTable tickets={tickets} />
            </Col>
        </Row>
    </Container>
  )
}

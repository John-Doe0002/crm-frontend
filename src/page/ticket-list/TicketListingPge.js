import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { breadcr as Breadcrumb } from '../../components/breadcrumb/breadcr'
import { SearchForm } from '../../components/search-form/SearchForm'
import { TicketTable } from '../../components/ticket-table/ticket.table'
import tickets from '../../assets/data/dummy-ticks.json'
import { Link } from 'react-router-dom';
import './ticket-list.css'

export const TicketList = () => {

    const [str, setStr] = useState('');
    const [dispTicket, setDispTicket] = useState(tickets);

    useEffect(() => {}, [str, dispTicket] )
    
    const handleOnChange = (e) =>{
        const { value } = e.target;
        setStr( value );
        searchTicket(value);
    };

    const searchTicket = (sttr) =>{

        const displayTicks = tickets.filter((row) => row.subject.toLowerCase().includes(sttr.toLowerCase()));

        setDispTicket(displayTicks);
    };

    

  return (
    <Container>
        <Row>
            <Col className='mt-3 mb-2' style={{'fontSize': '1.3rem'}}>
              <Breadcrumb page="TicketList"/>
            </Col>
            <hr />
        </Row>
        &nbsp;
        <Row>
            <Col className='bttn'>
              <Link to='/new-ticket'>
              <Button className='button0'>Add New Ticket</Button>
              </Link>
            </Col>
            <Col className='text-right'>
              <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        &nbsp;
        <Row>
            <Col>
              <TicketTable tickets={dispTicket} />
            </Col>
        </Row>
    </Container>
  );
};

import React, {useEffect, useState} from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { breadcr as Breadcrumb } from '../../components/breadcrumb/breadcr'
import { NewTicketForm } from '../../components/new-ticket-form/NewTicketForm'

const initialFrmDt = {
  subject: "",
  ticketdate: "",
  description: "",
};
export const NewTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  useEffect(() => {}, [frmData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log("Form submit request received", frmData);
  };

  return (
    <Container>
        <Row>
            <Col className='mt-3 mb-2' style={{'fontSize': '1.3rem'}}> 
                <Breadcrumb className="newticket" page="New Ticket"/>
            </Col>
                    <hr />
        </Row>

        <Row>
            <Col>
                <NewTicketForm 
                  handleOnChange={handleOnChange} 
                  handleOnSubmit={handleOnSubmit}
                  frmDt = {frmData}    
                />
            </Col>
        </Row>
    </Container>
  );
};

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Defaultlayout } from './layout/Default.layout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { NewTicket } from './page/new-ticket/NewTicket.js';
import { TicketList } from './page/ticket-list/TicketListingPge.js';
import { Ticket } from './page/ticket/Ticket.page.js';


import { Entry } from './page/entry/Entry.page';
import { PrivateRoute } from './components/private-route/PrivateRoute.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>  
          <Route exact path='/' element={<Entry />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Defaultlayout/>}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/new-ticket' element={<NewTicket />} />
              <Route path='/tickets' element={<TicketList/>} />
              <Route path='/ticket/:tId' element={<Ticket />} /> 
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

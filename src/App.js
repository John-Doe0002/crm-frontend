
import './App.css';
import { Defaultlayout } from './layout/Default.layout';
// import { Dashboard } from './page/dashboard/Dashboard.page';
//import { NewTicket } from './page/new-ticket/NewTicket.js';
//import { TicketList } from './page/ticket-list/TicketListingPge.js';
import { Ticket } from './page/ticket/Ticket.page.js';

//import { Entry } from './page/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/*<Entry />*/}
      <Defaultlayout>
         {/*<Dashboard />*/}
         {/*<NewTicket />*/}
         {/*<TicketList/>*/}
         <Ticket />
      </Defaultlayout>
    </div>
  );
}

export default App;

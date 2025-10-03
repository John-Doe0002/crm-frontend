
import './App.css';
import { Defaultlayout } from './layout/Default.layout';
// import { Dashboard } from './page/dashboard/Dashboard.page';
import { NewTicket } from './page/new-ticket/NewTicket.js';

//import { Entry } from './page/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/*<Entry />*/}
      <Defaultlayout>
         {/*<Dashboard />*/}
         <NewTicket />
      </Defaultlayout>
    </div>
  );
}

export default App;

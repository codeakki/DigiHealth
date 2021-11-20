import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import SimpleForm from "./components/chatbot/SimpleForm";
import Header from "./components/Header";
import { Provider } from 'react-redux';
import Home from "./components/Home";
import CovidApp from "./CovidApp";
import Appointment from './components/containers/Appointment';
import AppointmentDetails from './components/containers/AppointmentDetails';
import Symptom from './Symptoms.js';

function App() {
  return (
    <div className="App">
      <SimpleForm />
      <Router>
        <Header />
        <Switch>  
          <Home />
          <div>
            <SimpleForm />
          </div>
          <Route path="/:date/:month/:year/:timeFrom/details" component={AppointmentDetails}/>
          <Route path="/:date?/:month?/:year?/" component={Appointment}/>
          <CovidApp/>
        </Switch>
      </Router>
      <Router>
        <Symptom/>
      </Router>
    </div>
  );
}

/* function App() {
  return (
    <Router>
      <div>
        <Switch>
           <Route path="/:date/:month/:year/:timeFrom/details" component={AppointmentDetails}/>
          <Route path="/:date?/:month?/:year?/" component={Appointment}/>
        </Switch>
      </div>
    </Router>
  );
} */


export default App;

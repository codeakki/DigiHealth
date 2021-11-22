import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>

        <Switch>
          <Route exact path="/home">
            <Header />
            <Home />
            <SimpleForm />
            <Router>
              <Symptom />
            </Router>
          </Route>
          <Route exact path="/home/covid">
            <CovidApp />
          </Route>
          <Route exact path="/:date/:month/:year/:timeFrom/details">
            <AppointmentDetails />
          </Route>
          <Route exact path="/:date?/:month?/:year?/">
            <Appointment />
          </Route>
        </Switch>
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
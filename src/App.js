import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SimpleForm from "./components/chatbot/SimpleForm";
import Header from "./components/Header";
import Home from "./components/Home";
import CovidApp from "./CovidApp";
import Symptom from './Symptoms.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home"></Route>
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
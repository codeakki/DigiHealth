import { BrowserRouter as Router, Switch, Navigate, Route } from "react-router-dom";
import SimpleForm from "./components/chatbot/SimpleForm";
import Header from "./components/Header";
import Home from "./components/Home";
import CovidApp from "./CovidApp";
import Symptom from './Symptoms.js';
import Appointment from './components/containers/Appointment/index';
import AppointmentDetails from './components/containers/AppointmentDetails/index';
import MapContainer from "./components/containers/MapContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Header />
            <Home />
            <SimpleForm />
            <Router>
              <Symptom />
            </Router>
          </Route>
          <Route exact path="/Covid-Tracker">
            <Header />
            <Router>
              <CovidApp />
            </Router>
          </Route>
          <Route exact path="/Navigate-Hospital">
            <Header />
            <Router>
              <MapContainer />
            </Router>
          </Route>
          <Route exact path="/home/:date/:month/:year/:timeFrom/details">
            <AppointmentDetails />
          </Route>
          <Route exact path="/home/:date?/:month?/:year?/">
            <Appointment />
          </Route>
          <Route exact path="/Covid-19">
            <Router>
              <Header />
              <SimpleForm />

            </Router>
            <Router>
              <Symptom />
            </Router>
          </Route>
        </Switch>

      </Router>



    </div >
  );
}

export default App;
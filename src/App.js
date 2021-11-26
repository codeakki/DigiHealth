import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Route exact path="/Covid-Tracker">
            <CovidApp />
          </Route>
          <Route exact path="/Navigate-Hospital">
            <MapContainer />
          </Route>
          {/* <Route exact path="/:date/:month/:year/:timeFrom/details">
            <AppointmentDetails />
          </Route> */}
          <Route exact path="/Appointment">
            <Appointment />
          </Route>
        </Switch>
      </Router>



    </div >
  );
}

export default App;
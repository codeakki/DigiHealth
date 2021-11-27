import { BrowserRouter as Router, Switch, Navigate, Route } from "react-router-dom";
import SimpleForm from "./components/chatbot/SimpleForm";
import GetMedication from "./components/chatbot/GetMedication";
import Header from "./components/Header";
import Home from "./components/Home";
import CovidApp from "./CovidApp";
import Symptom from './Symptoms.js';
import Overview from './Overview.js';
import Appointment from './components/containers/Appointment/index';
import AppointmentDetails from './components/containers/AppointmentDetails/index';
import MapContainer from "./components/containers/MapContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import ContactUs from "./components/contact/contactUs.js";
import AboutUs from "./components/about/aboutUs.js"

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

               <Header />
               <SimpleForm/>
            <Router>
              <Overview />
            </Router>
          </Route>
          <Route exact path ="/GetMedication">
             <Header />
             <Router>
            <GetMedication/>
            </Router>
          </Route>
          <Route exact path ="/contactUs">
             <Header />
             <Router>
            <ContactUs />
            </Router>
          </Route>
          <Route exact path ="/AboutUs">
             <Header />
             <SimpleForm/>
             <Router>
            <AboutUs />

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
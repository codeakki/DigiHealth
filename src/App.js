import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SimpleForm from "./components/chatbot/SimpleForm";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Tracker from "./components/Tracker";


function App() {
  return (
    <div className="App">
      <SimpleForm />
      <Router>
        <Header />
        <Switch>
          <Home />
           <Route exact path="/" component={Tracker} />
          <div>
            <SimpleForm />
          </div>
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
          <Route exact path="/" component={Tracker} />
        </Switch>
      </div>
    </Router>
  );
} */


export default App;

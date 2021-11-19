import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SimpleForm from "./components/chatbot/SimpleForm";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";


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
        </Switch>
      </Router>
    </div>
  );
}

export default App;

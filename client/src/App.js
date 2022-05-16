// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import {Switch ,Route,Redirect } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import contact from "./components/Contact";
import Form from "./components/Form";
import Signinout from './components/Signinout';



function App() {
  return (
    <>

      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/about" component = {About} />
        <Route exact path="/contact" component = {contact} />
        <Route  exact path="/Signin" component = {Signinout} />
        <Redirect exact path="/" />        
      </Switch>
    </>
  );
}

export default App;

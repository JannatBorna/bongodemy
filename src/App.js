import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import CyberBulling from './Component/CyberBulling';
import CyberCrime from './Component/CyberCrime';
import Services from './Component/Services';
import Training from './Component/Training';
import Resources from './Component/Resources';
import Contact from './Component/Contact';
import Aboutus from './Component/Aboutus';
import Login from './Component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cyberbulling">
            <CyberBulling />
          </Route>
          <Route path="/cybercrime">
            <CyberCrime />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/training">
            <Training />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/login">
            <Login />
          </Route>



          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

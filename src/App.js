import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Component/Shared/Header/Navigation';
import Home from './Component/pages/Home/Home';
import Contact from './Component/pages/Contact/Contact';
import AboutUs from './Component/pages/AboutUs/AboutUs';
import Footer from './Component/Shared/Footer/Footer';
import Services from './Component/pages/Services/Services';
import Training from './Component/pages/Training/Training';
import NotFound from './Component/pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            {/* <Route path="/cyberBulling">
              <CyberBulling />
            </Route>
            <Route path="/cyberCrime">
              <CyberCrime />
            </Route> */}
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/training">
              <Training />
            </Route>
            {/* <Route path="/resources">
              <Resources />
            </Route> */}
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/about">
              <AboutUs />
            </Route>
            {/* <Route path="/login">
              <Login />
            </Route> */}

            <Route path="/">
              <Home />
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

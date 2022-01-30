import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Component/Shared/Header/Navigation';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/pages/Home/Home';
import CyberBulling from './Component/pages/CyberBulling/CyberBulling';
import CyberCrime from './Component/pages/CyberCrime/CyberCrime';
import Services from './Component/pages/Services/Services';
import Training from './Component/pages/Training/Training';
import Resources from './Component/pages/Resources/Resources';
import AboutUs from './Component/pages/AboutUs/AboutUs';
// import Login from './Component/pages/Contact/Login';
import Contact from './Component/pages/Contact/Contact';
import Login from './Component/pages/Contact/Login';
import Register from './Component/pages/Contact/Register';
import AuthProvider from './Contexts/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cyberBulling">
            <CyberBulling />
          </Route>
          <Route path="/cyberCrime">
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
            <AboutUs />
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/register">
           <Register></Register>
          </Route>
          



          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;

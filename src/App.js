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
import ComplainForm from './Component/pages/ComplainForm/ComplainForm';
import ComplainFormSec from './Component/pages/ComplainForm/ComplainFormSec';
import ComplainFormThird from './Component/pages/ComplainForm/ComplainFormThird';

import Particles from "react-tsparticles";



function App() {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{


          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 2,
            },
          },
          detectRetina: true,
        }}

      />
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
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/complainform">
            <ComplainForm />
          </Route>
          <Route path="/complainformsec">
           <ComplainFormSec/>
          </Route>
          <Route path="/complainformthird">
           <ComplainFormThird/>
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

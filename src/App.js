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
import Contact from './Component/pages/Contact/Contact';
import HackingLab from './Component/Shared/Header/HackingLab';


import ComplainFormSec from './Component/pages/ComplainForm/ComplainFormSec';
import ComplainFormThird from './Component/pages/ComplainForm/ComplainFormThird';
import Courses from './Component/pages/Courses/Courses';
import Login from './Component/pages/Contact/Login';
import Register from './Component/pages/Contact/Register';
import AuthProvider from './Contexts/AuthProvider';
import Particles from "react-tsparticles";
import GetConsultation from './Component/pages/GetConsultation/GetConsultation';
import Complainforms from './Component/pages/ComplainForm/Complainforms';
import CrimeComplainform from './Component/pages/ComplainForm/CrimeComplalinform';
import NotFound from './Component/pages/NotFound/NotFound';
import Emergency from './Component/pages/Emergency';
import ComingPage from './Component/pages/ComingPage/ComingPage';
import Campaign from './Component/subComp/Campaign/Campaign';
import Methodology from './Component/pages/Methodology/Methodology';
import StanderGuideline from './Component/pages/Stander_Guideline/Stander_Guideline';
import OurTeamMember from './Component/pages/OurTeamMember/OurTeamMember';



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
              value: "#0ED7A8",
            },
            links: {
              color: "#00000",
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
              value: 15,
            },
            opacity: {
              value: 2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 1.5,
            },
          },
          detectRetina: true,
        }}
      />  
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
            <Route path="/emergency">
              <Emergency />
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
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/ourTeamMember">
              <OurTeamMember />
            </Route>
            <Route path="/comingPage">
              <ComingPage />
            </Route>
            <Route path="/standerGuideline">
              <StanderGuideline />
            </Route>
            <Route path="/campaign">
              <Campaign />
            </Route>
            <Route path="/methodology">
              <Methodology />
            </Route>

            <Route path="/complainforms">
              <Complainforms />
            </Route>
            <Route path="/crimecomplainform">
              <CrimeComplainform />
            </Route>
            <Route path="/complainformsec">
              <ComplainFormSec />
            </Route>
            <Route path="/complainformthird">
              <ComplainFormThird />
            </Route>
            <Route path="/getConsultation">
              <GetConsultation />
            </Route>
            <Route path="/hackingLab">
              <HackingLab />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
        
      </AuthProvider>
    </div>
  );
}
export default App;
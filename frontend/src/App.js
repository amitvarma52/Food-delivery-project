import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Pages/Signup.js';
import ZomatoHome from './Components/Pages/AppHome.js';
import ThreeCards from './Components/Pages/ThreeCards.js';
import Collections from './Components/Pages/Collections.js';
import Explore from './Components/Pages/Explore.js';
import PlaceCards from './Components/Pages/PlaceCards.js';
import AppFooter from './Components/Pages/AppFooter.js';
import Login from './Components/Pages/Login.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<OverlayPage Component={Signup} />} />
        <Route path="/login" element={<OverlayPage Component={Login} />} />
      </Routes>
    </Router>
  );
}

const MainPage = () => (
  <>
    <ZomatoHome />
    <ThreeCards />
    <Collections />
    <PlaceCards />
    <Explore />
    <AppFooter />
  </>
);

const OverlayPage = ({ Component }) => (
  <>
    <MainPage />
    <div className="overlay">
      <Component />
    </div>
  </>
);

export default App;

import './App.css';

import Navbar from './Components/Pages/Navbar.js';
import Signup from './Components/Pages/Signup.js';
import ZomatoHome from './Components/Pages/AppHome.js';
import Cardspage from './Components/Pages/Placec.js';
import Collections from './Components/Pages/Collections.js';
import Explore from './Components/Pages/Explore.js';
import ThreeCards from './Components/Pages/ThreeCards.js';

import AppFooter from './Components/Pages/AppFooter.js';

function App() {
  return (
  <>
  
    <Navbar />
    <Signup />
    <ZomatoHome/>
    <Cardspage/>
    <Collections/>
    <ThreeCards/>
    <Explore/>
    <AppFooter/>
    
  </>
  )
}
export default App;

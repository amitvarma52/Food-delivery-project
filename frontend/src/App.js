import './App.css';

import Signup from './Components/Pages/Signup.js';
import ZomatoHome from './Components/Pages/AppHome.js';
import ThreeCards from './Components/Pages/ThreeCards.js';
import Collections from './Components/Pages/Collections.js'
import Explore from './Components/Pages/Explore.js';
import PlaceCards from './Components/Pages/PlaceCards.js';

import AppFooter from './Components/Pages/AppFooter.js';

function App() {
  return (
  <>
  
    <ZomatoHome/>

    {/* <ThreeCards/> */}
    {/* <Collections/> */}
    {/* <PlaceCards/>/ */}
    <Explore/>
    <AppFooter/>
    
  </>
  )
}
export default App;

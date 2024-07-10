import './App.css';
import ZomatoHome from './Components/pages/AppHome.js';
import Collections from './Components/pages/Collections.js'
import Explore from './Components/pages/Explore.js';
import Cards from './Components/pages/Cards.js';

import AppFooter from './Components/pages/AppFooter.js';

function App() {
  return (
  <>
    <ZomatoHome/>
    <Collections/>
    <Cards/>
    <Explore/>
    <AppFooter/>
    
  </>
  )
}
export default App;

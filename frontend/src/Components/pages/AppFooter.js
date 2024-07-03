import React from 'react';
import "../Css/ZomatoFooter.css"
import ZomatoLogo from '../Image/zomato-logo.png';

const AppFooter = () => {
  return (
    <>
       <footer className='ZomatoFooter'>
        <div className='ZomatoFooterMainContainer'>
        <section className='FooterSection'>
          <div className='FooterSecLogo'><img className='FooterSecImg' src={ZomatoLogo} alt="No img  " /></div>
          <div className='FooterSecPlaceHolder'></div>
          <section className='FooterListSec'>
            <div>
              <select name="regions" id="regions" className='FooterOptions'>
              <option value="volvo">India</option>
              <option value="saab">UAE</option>
              </select>
            </div>
            <div>
            <select name="Language" id="Language" className='FooterOptions'>
              <option value="English">English</option>
              
              </select>
            </div> 
          </section>




        </section>
        <div className='FooterLinkDivs'>

          <div className="linkdivs AboutZomatoDiv">
            <h6 className="AboutZomato-Header"> About Zomato</h6>
            <nav className="AboutZomato-Nav">
              <a href="" className='AboutZomato-Links'>Who we are</a>
              <a href="" className='AboutZomato-Links'>Blog</a>
              <a href="" className='AboutZomato-Links'>Work with Us</a>
              <a href="" className='AboutZomato-Links'>Invester Relations</a>
              <a href="" className='AboutZomato-Links'>Report Fraud</a>
              <a href="" className='AboutZomato-Links'>Press kit</a>
              <a href="" className='AboutZomato-Links'>Contact US</a>

            </nav>
          </div>
          <div className="linkdivs ZomaverseDiv">
          <h6 className="Zomaverse-Header">Zomaverse</h6>
            <nav className="Zomaverse-Nav">
              <a href="" className='Zomaverse-Links'>Zomato</a>
              <a href="" className='Zomaverse-Links'>Blinkit</a>
              <a href="" className='Zomaverse-Links'>Feeding India</a>
              <a href="" className='Zomaverse-Links'>Hyperpure</a>
              <a href="" className='Zomaverse-Links'>Zomaland</a>
              <a href="" className='Zomaverse-Links'>Weather Union</a>

            </nav>
          </div>
          <div className="linkdivs RestrauntsDiv">
          <h6 className="Restraunts-Header">For Restraunts</h6>
            <nav className="Restraunts-Nav">
              <a href="" className='Restraunts-Links'>Partner With Us</a>
              <a href="" className='Restraunts-Links'>Apps For You</a>
            </nav>
          </div>
          <div className="linkdivs Learn-MoreDiv">
          <h6 className="Learn-More-Header">For Restraunts</h6>
            <nav className="Learn-More-Nav">
              <a href="" className='Learn-More-Links'>Privacy</a>
              <a href="" className='Learn-More-Links'>Security</a>
              <a href="" className='Learn-More-Links'>Terms</a>
              <a href="" className='Learn-More-Links'>Sitemap</a>
            </nav>
          </div>
          <div className="linkdivs"></div></div>
          <div>
          <hr className='AppFooterHR' />
        </div>
        <div></div>
        </div>
       
       </footer>
    </>
  )
}

export default AppFooter
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
        <div className='FooterLinkDivs'><div className="linkdivs"></div>
        <div className="linkdivs"></div>
        <div className="linkdivs"></div>
        <div className="linkdivs"></div>
        <div className="linkdivs"></div></div>
        <div></div>
        <div></div>
        </div>
       
       </footer>
    </>
  )
}

export default AppFooter
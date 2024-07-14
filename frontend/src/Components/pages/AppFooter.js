import React, { useState, useEffect } from 'react';

import "../CSS/ZomatoFooter.css"

import axios from 'axios'

import ZomatoLogo from '../Image/zomato-logo.png';
import Appstore from '../Image/downAppStore.webp';
import Gplay from '../Image/downGplay.webp';

const AppFooter = () => {
  const [appFooterData, setAppFooterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/footer/getfooter");
        setAppFooterData(response.data.footers); // Assuming response.data.footers is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <footer className='ZomatoFooter'>
        <div className='ZomatoFooterMainContainer'>
          <section className='FooterSection'>
            <div className='FooterSecLogo'><img className='FooterSecImg' src={ZomatoLogo} alt="Zomato Logo" /></div>
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
          {appFooterData.map((footer, index) => (
              <div key={index} className={`linkdivs ${footer.footer_className}`}>
                <h6 className={`${footer.footer_className}-Header`}>{footer.footer_heading}</h6>
                <nav className={`${footer.footer_className}-Nav`}>
                  {footer.footer_links.map((link, index) => (
                    <a key={index} href="#" className={`${footer.footer_className}-Links`}>{link}</a>
                  ))}
                </nav>
              </div>
            ))}
            <div className="linkdivs SocialLinksDiv">
              <h6>Social Links</h6>
              <div className='SocialLinks'>
                <a href="#" className='SocialIcons'>T</a>
                <a href="#" className='SocialIcons'>T</a>
                <a href="#" className='SocialIcons'>T</a>
                <a href="#" className='SocialIcons'>T</a>
                <a href="#" className='SocialIcons'>T</a>
              </div>
              <div className='blk-Div'>
                
              </div>
              <div className="download-div">
                <div className="download-subdiv"><a><img  className='DownIMg' src={Gplay}></img></a></div>
                <div className="download-subdiv"><a><img  className='DownIMg' src={Appstore}></img></a></div>
              </div>
            </div>
          </div>

          <div>
            <hr className='AppFooterHR' />
          </div>

          <div className='AppFooterAfter'>
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default AppFooter;

import React, { useEffect, useState } from 'react'


import axios from 'axios'

import '../Css/Explore.css';
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";
const Explore = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [appExploreData, setExploreData] = useState([]);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/v1/restraunt-types/list");
          setExploreData(response.data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <>
            <section className='Explore-near-Section'>
            {appExploreData.restaurants.map((restraunts, index) => (
                <div className='Explore-near-Container'>
                    <div className="Explore-near-Header">
                        <p className="Explore-near-p">
                        {restraunts .heading}
                        </p>
                    </div>
                    <div className={`Explore-Content  ${isOpen ? 'open' : 'closed'}`}>
                        <div className="Explore-Content-header" onClick={toggleContent}>
                            <div className="Explore-Content-text-div"><h5 className="Explore-Content-text">Dummy text</h5></div>
                            <div className='Explore-Content-icon' ><i className='Explore-Icon' >
                                <IoIosArrowDown style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)'}}/></i></div>
                        </div>
                        <div className="Explore-Content-links" style={{ display: isOpen ? 'block' : 'none' }}>
                            <div>   
                            {restraunts.restaurantTypes.map((restypes, index) => (
                                 <a key={index} href="#" >{restypes}</a>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}



                
            </section>
        </>
    )
}

export default Explore
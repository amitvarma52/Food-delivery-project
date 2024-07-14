import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/Explore.css';
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";
const Explore = () => {
    const [isopen, setIsOpen] = useState([]);
    const [appExploreData, setExploreData] = useState([]);

    const toggleContent = (index) => {
        setIsOpen((prev) => {
            if (prev.includes(index)) {
                return prev.filter((i) => i !== index);
            } else {
                return [...prev, index];
            }
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/v1/restaurant-types/list");
                setExploreData(response.data.restaurants || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className='Explore-near-Section'>
            <div className='Explore-near-Container'>
                <div className="Explore-near-Header">
                    <p className="Explore-near-p">Explore options near me</p>
                </div>
                {appExploreData.map((restaurant, index) => (
                    <div key={index} className={`Explore-Content ${isopen.includes(index) ? 'open' : 'closed'}`}>
                        <div className="Explore-Content-header" onClick={() => toggleContent(index)}>
                            <div className="Explore-Content-text-div">
                                <h5 className="Explore-Content-text">{restaurant.heading}</h5>
                            </div>
                            <div className='Explore-Content-icon'>
                                <i className='Explore-Icon'>
                                    <IoIosArrowDown style={{ transform: isopen.includes(index) ? 'rotate(0deg)' : 'rotate(180deg)' }} />
                                </i>
                            </div>
                        </div>
                        <div className="Explore-Content-links" style={{ display: isopen.includes(index) ? 'block' : 'none' }}>
                            {restaurant.restaurantTypes.map((type, idx) => (
                         <>    <a key={idx} href="#">{type} </a>
                            <LuDot/>
                         </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Explore;

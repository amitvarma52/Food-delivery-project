import React, { useEffect, useState } from 'react';
import "../Css/ZomatoHome.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import axios from "axios";

const ZomatoHome = () => {
  const [appHomeData, setAppHomeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/menu/getMenu");
        setAppHomeData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return ( 
    <div className="ZomatoHome Container">
      <div className='ZomatoHomeTitle'>
        <p className='HomeTitle'>{appHomeData.length > 0 ? appHomeData[0].heading : "Loading..."}</p>
      </div>
      <div className='ZomatoHomeDescrition'>
        <p className='HomeDescrition'>{appHomeData.length > 0 ? appHomeData[0].description : ""}</p>
      </div>
      <div className='ZomatoHomeSearch'>
        <div className='HomeSearch'>
          <FaLocationDot className='LocationIcon'/>
          <div className='TextBox'>
            <input type="text" placeholder="Thane, Maharashtra " />
          </div> 
          <IoMdArrowDropdown className='DownArrowIcon'/> 
        </div>
        <div className='SearchTextBox'> 
          <HiOutlineMagnifyingGlass/>
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
        </div>
      </div>
    </div>
  );
}

export default ZomatoHome;

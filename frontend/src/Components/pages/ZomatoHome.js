import React from 'react';
import "../Css/ZomatoHome.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";


const ZomatoHome = () => {
  const ZomatoHomearry = [];
    
  return ( 
    <>
      <div className="ZomatoHome Container">
       
        <div className='ZomatoHomeTitle'><p className='HomeTitle'>Zomato</p></div>
           <div className='ZomatoHomeDescrition'><p className='HomeDescrition'>Discover the best food & drinks in Mumbai</p></div>
           <div className='ZomatoHomeSearch'><div className='HomeSearch'> <FaLocationDot className='LocationIcon'/><div className='TextBox'>
    <input type="text" placeholder="Thane,Maharastra " />
  </div> <IoMdArrowDropdown className='DownArrowIcon'/> </div>
           <div className='SearchTextBox'> 
           
           <HiOutlineMagnifyingGlass/>
      <input type="text" placeholder="Search for restraunt, cuisine or a dish" />

           </div>
           </div>
   
           
      </div>
    </>
  )
}

export default ZomatoHome

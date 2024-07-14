import React from 'react'
import '../CSS/Cardspage.css'
const Cardspage = () => {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="errorloading" />
                <strong>Order Online</strong>
                <p>Stay home and order to your doorstep</p>
                </div>
                <div className='card'>
                    <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="errorloading" />
                    <strong>Dining</strong>
                    <p>View the city's favourite dining venues</p>
                </div>
                <div className='card'>
                    <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="errorloading" />
                    <strong>Nightlife and Clubs</strong>
                    <p>Explore the city's nightlife outlets</p>
                </div>
            </div>
        </>
    )
}

export default Cardspage
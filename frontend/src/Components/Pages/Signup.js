import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import '../CSS/Signup.css'
const Signup = () => {

  const [user, setUser] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://.................")
        setUser(response.data);
      } catch (error) {
        console.log("error fetching data:", error)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div className='cont'>
        <div className='signup'>Sign up </div>
        <button className='x'> <strong>X</strong></button>
        <div><input type="text" placeholder="Name" className='input'></input></div>
        <div><input type="text" placeholder="Fullname" className='input'></input></div>
        <div><input type="text" placeholder="Email" className='input'></input></div>
        <div><input type="text" placeholder="PhoneNo" className='input'></input></div>
        <div><button className='btn'>Create account</button>
        </div>
        <div className='-or-'>
          <div className='or-line'></div>
          <div>or</div>
          <div className='or-line'></div> </div>
        <div className='gsignin'> @ Sign in with Google</div>
        <div className='line'></div>
        <div className='already'>Already have an account? Log in</div>
      </div>
      
    </>
  )
}

export default Signup
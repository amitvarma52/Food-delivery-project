import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../CSS/Signup.css';
import {ToastContainer,toast} from 'react-toastify'

const Signup = () => {
  
  const [name , setName ] = useState();
  const [lastName , setlastName ] = useState();
  const [email , setEmail ] = useState();
  const [phone , setPhone ] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); // Initialize useNavigate

  
const handleSubmit = async (e) => {
  console.log("hello world");
  e.preventDefault();
  try {
    if(!name||!lastName||!email||!phone||!password){
      toast.error("PLease Provide all fields");
    }
    const res = await axios.post('https://localhost:8000/api/v1/user/newUser',{name,lastName,email,phone,password})
    // validaion
    if(res.data.success){
      toast.success(res.data.message)
    }
    else{
      toast.error(res.data.message)
    }
  } catch (error) {
    console.log(error);
  }
}


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:8000/api/v1/user/newUser");
  //       setUser(response.data);
  //     } catch (error) {
  //       console.log("error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleClose = () => {
    navigate('/'); // Navigate to the home page
  };
  const handleLogIn = () => {
    navigate('/login'); // Navigate to the home page
  };

  return (
    <>
    
      <div className='SignUp-Container'>
        <div className='signup'>Sign up </div>
        <button className='x' onClick={handleClose}> <strong>X</strong></button>
        <div><input
         type="text"
          placeholder="Name" 
          className='input'
          value={name}
          onChange={(e) => setName(e.target.value)}/>
        </div>

        <div><input type="text"
         placeholder="Lastname" 
         className='input'value={lastName}
         onChange={(e) => setlastName(e.target.value)}/>
        </div>

        <div><input type="email" 
        placeholder="Email"
        className='input'value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div><input type="text"
         placeholder="PhoneNo"
          className='input'
         value={phone}
          onChange={(e) => setPhone(e.target.value)}/>
        </div>

        <div><input type="password" 
            placeholder="Password" 
            className='input'value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div><button className='btn' onClick={handleSubmit}>Create account</button></div>

        <div className='-or-'>
          <div className='or-line'></div>
          <div>or</div>
          <div className='or-line'></div>
        </div>
        <div className='gsignin'> @ Sign in with Google</div>
        <div className='line'></div>
        <div className='already'>Already have an account?<span onClick={handleLogIn}>Log in</span> </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;

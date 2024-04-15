import React, { useState } from 'react';
import LogoLogin from '../assets/logo-login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import grapichLeftTop from '../assets/grap-login-above-left.png';
import grapichRightTop from '../assets/grap-login-above-right.png';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Perform any login logic here
    // Redirect to "/farm-welcome" route
    navigate('/farm');
  };

  return (
    <div className='bg-[#FFFBEB] h-[100vh] w-full flex justify-center align-center flex-col'>
      <img src={grapichLeftTop} alt="" className='absolute top-0 left-0 w-[53%] h-[66px] object-fit' />
      <img src={grapichRightTop} alt="" className='absolute top-0 right-0 w-[25%] h-[54px] object-fit' />
      <img src={LogoLogin} alt="" className='w-[189px] h-[70px] mx-auto mt-10' />
      <div className='w-10/12 mx-auto'>
        <div className='my-2 flex flex-col gap-1 align-center'>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='value'
            className='py-2 px-3 rounded-md bg-[#FFFFFF] text-[#89898A] border-[#D8D8DA] border outline-none'
          />
        </div>
        <div className='my-2 flex flex-col gap-1 align-center'>
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder='*****'
              className='py-2 px-3 w-full rounded-md bg-[#FFFFFF] text-[#89898A] border-[#D8D8DA] border outline-none'
            />
            <button
              type="button"
              className="absolute bottom-[12px] right-[7px] flex items-center justify-center mr-2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <button 
            onClick={handleLogin}
            className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-white my-2 mx-auto'>
            Login
          </button>
          <p className='font-[300] text-[#5B5B5E] text-center'>
            Don't have an account?{" "}
            <Link to="/register">
            <span className='text-[#34A853]'>Sign Up</span>
            </Link>
          </p>

          <div className='flex gap-2 justify-center'>
            <hr className='my-auto border-gray-400 w-[27%]' /> {/* Horizontal line */}
            <p className='font-[300] text-[#5B5B5E] text-center'>
              Log In With
            </p>
            <hr className='my-auto border-gray-400 w-[27%]' /> {/* Horizontal line */}
          </div>

          {/* Social account login */}
          <div className='flex flex-row gap-2 w-4/5 mx-auto justify-center items-center'>
            <div className='bg-[#FFFFFF] py-2 px-3 rounded-full flex gap-2 items-center w-[240px] shadow-md'>
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2', width: '40px', height: '40px' }} />
              <p className='text-[#000000] font-normal'>Facebook</p>
            </div>
            <div className='bg-[#FFFFFF] py-2 px-3 rounded-full flex gap-2 items-center w-[240px] shadow-md'>
              <FontAwesomeIcon icon={faGoogle} style={{ color: '#DB4437', width: '40px', height: '40px' }} />
              <p className='text-[#000000] font-normal'>Google</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
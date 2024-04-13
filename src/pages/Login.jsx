import React, { useState } from 'react';
import LogoLogin from '../assets/logo-login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='bg-[#FFFBEB] h-[100vh] w-full flex justify-center align-center flex-col'>
      <img src={LogoLogin} alt="" className='w-[189px] h-[50px] mx-auto' />
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
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>
        <div className='my-2 flex flex-col gap-1 align-center'>
          <label htmlFor="repeat-password">Repeat Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="repeat-password"
              id="repeat-password"
              placeholder='value'
              className='py-2 px-3  rounded-md bg-[#FFFFFF] text-[#89898A] border-[#D8D8DA] border outline-none
              w-full'
            />
            <button
              type="button"
              className="absolute bottom-[12px] right-[7px] flex items-center justify-center mr-2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <button className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-white my-2 mx-auto'>
            Login
          </button>
          <p className='font-[300] text-[#5B5B5E] text-center'>
            Already have an account?
            <span className='text-[#34A853]'>Login</span>
          </p>

          <div className='flex gap-2 justify-center'>
            <hr className='my-auto border-gray-400 w-[27%]' /> {/* Horizontal line */}
            <p className='font-[300] text-[#5B5B5E] text-center'>
              SignUp in With
            </p>
            <hr className='my-auto border-gray-400 w-[27%]' /> {/* Horizontal line */}
          </div>

          {/* Social account login */}
          <div className='flex flex-row gap-2 align-center w-4/5 mx-auto'>
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

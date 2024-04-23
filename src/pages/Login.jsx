import React, { useState } from 'react';
import LogoLogin from '../assets/logo-login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faEyeSlash, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import grapichLeftTop from '../assets/grap-login-above-left.png';
import grapichRightTop from '../assets/grap-login-above-right.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isMinLength, setIsMinLength] = useState(false);
  const [hasCapitalLetter, setHasCapitalLetter] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [passwordErrorVisible, setPasswordErrorVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value) => {
    // You can use a regular expression or any other method to validate email
    if (!value.includes('@')) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!value) {
      // If the password is empty, clear all error states
      setPasswordError('');
      setIsMinLength(false);
      setHasCapitalLetter(false);
      setHasNumber(false);
      setHasSymbol(false);
      setPasswordErrorVisible(false);
      return;
    }

    if (!value.match(passwordRegex)) {
      setPasswordError('At least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.');
      setIsMinLength(false);
      setHasCapitalLetter(false);
      setHasNumber(false);
      setHasSymbol(false);
      setPasswordErrorVisible(true); // Show the error message
    } else {
      setPasswordError('');
      setIsMinLength(true);
      setPasswordErrorVisible(false); // Hide the error message
    }

    if (/[A-Z]/.test(value)) {
      setHasCapitalLetter(true);
    } else {
      setHasCapitalLetter(false);
    }

    if (/\d/.test(value)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }

    if (/[!@#$%^&*]/.test(value)) {
      setHasSymbol(true);
    } else {
      setHasSymbol(false);
    }
  };  


  const handleLogin = () => {
    // Check if there are any errors
    if (emailError || passwordError || confirmPasswordError) {
      // If there are errors, do not proceed
      return;
    }
  
    // Perform any additional validation here, if necessary
  
    // Perform login logic here
    // For demonstration purposes, simulate a successful login
    localStorage.setItem('login', true);
    setTimeout(() => {
      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Redirecting to your dashboard...',
        timer: 2000, // Automatically close after 2 seconds
      }).then(() => {
        // Redirect to "/farm" route after success message
        navigate('/user-profile');
      });
    }, 1000); // Simulating a delay for login logic, replace this with actual login logic
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
            onChange={(e) => validateEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <div className='my-2 flex flex-col gap-1 align-center'>
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder='value'
              className='py-2 px-3 w-full rounded-md bg-[#FFFFFF] text-[#89898A] border-[#D8D8DA] border outline-none'
              onChange={(e) => validatePassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute bottom-[12px] right-[7px] flex items-center justify-center mr-2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <div className='text-base text-red-500'>
            {passwordErrorVisible && passwordError && (
              <p className='flex md:flex-row 
            lg:flex-wrap xl:flex-row flex-col 
            md:text-[18px]
            lg:text-[16px] lg:gap-2'>
                {isMinLength ? (
                  <span className='text-green-500 flex flex-row mr-1'>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" /> 8 characters
                  </span>
                ) : (
                  <span className='text-red-500 flex flex-row items-center mr-1'>
                    <FontAwesomeIcon icon={faTimesCircle} className="mr-1" /> 8 characters
                  </span>
                )}
                {hasCapitalLetter ? (
                  <span className='text-green-500 flex flex-row items-center mr-1'>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" /> 1 uppercase letter
                  </span>
                ) : (
                  <span className='text-red-500 flex flex-row items-center mr-1'>
                    <FontAwesomeIcon icon={faTimesCircle} className="mr-1" /> 1 uppercase letter
                  </span>
                )}
                {hasNumber ? (
                  <span className='text-green-500 flex flex-row items-center mr-1'>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" /> 1 number
                  </span>
                ) : (
                  <span className='text-red-500 flex flex-row items-center mr-1'>
                    <FontAwesomeIcon icon={faTimesCircle} className="mr-1" /> 1 number
                  </span>
                )}
                {hasSymbol ? (
                  <span className='text-green-500 flex flex-row items-center mr-1'>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" /> 1 symbol
                  </span>
                ) : (
                  <span className='text-red-500 flex flex-row items-center mr-1'>
                    <FontAwesomeIcon icon={faTimesCircle} className="mr-1" /> 1 symbol
                  </span>
                )}
              </p>
            )}
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

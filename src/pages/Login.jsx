import React from 'react'
import LogoLogin from '../assets/logo-login.png'

const Login = () => {
  return (
   <div className='bg-[#FFFBEB] h-[100vh] w-full flex justify-center align-center
   flex-col'>
      <img src={LogoLogin} alt="" className='w-[189px] h-[50px] mx-auto' />
      <div className='w-10/12 mx-auto'>
        <div className='my-2 flex flex-col gap-1 align-center'>
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" id="email" placeholder='value' 
            className='p-2 rounded-md bg-[#FFFFFF] text-[#89898A] border-[#D8D8DA] border outline-none'/>  
        </div>
        <div className='my-2'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='*****' />  
        </div>
        <div className='my-2'>
          <label htmlFor="reapeat-password">Repeat Password</label>
          <input type="reapeat-password" name="reapeat-password" id="reapeat-password" placeholder='value' />  
        </div>
        <button className='w-fit bg-[#65A30D] py-1 px-5 rounded-md text-white my-2'>
          Login
          </button>
          <p className='font-[300] text-[#5B5B5E]'>
            Already have an account? 
            <span className='text-[#34A853]'>Login</span>
            </p>
      </div>
   </div>
  )
}

export default Login
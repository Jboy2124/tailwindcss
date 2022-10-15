import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Navbar from '../components/Navbar'
import LoginLogo from '../assets/login/login1.png';
import axios from 'axios';
import { FaInstagram, FaGoogle, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md'


const Login = () => {
  const username = useRef(null);
  const password = useRef(null);
  const [err, errHandler] = useState('');
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookies] = useCookies('');

  //  const handleLogin = async () => {
  //       const uname = username.current.value;
  //       const pword = password.current.value;

  //       if(uname.length != 0 && pword != 0){
  //           await axios.post('http://localhost:8000/login', {
  //               username: uname,
  //               password: pword
  //           }).then(response => {
  //               if(!response.data.payload.Error){
  //                   setCookie('accessToken', response.data.payload.token);
  //                   setTimeout(() => {
  //                       navigate('/')
  //                   }, 300);
  //               }    
  //               else
  //                   errHandler(response.data.payload.Error);
  //           });
  //       } else {
  //           errHandler('Empty fields')
  //       }  
  //   }

  return (
    <div>
      {/* <Navbar /> */}
      <div className='flex flex-col justify-center items-center min-h-screen py-2 bg-green-50'>
       <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex flex-row w-2/3 max-w-4xl'>
          {/* login */}
          <div className='w-3/5 p-5'>
            <div className='text-left'>
              <span className='text-lime-400 font-bold text-lg'>CLEAN</span><span className='text-red-500 font-bold text-lg'>PNG</span>
            </div>
            <div className='text-center py-5'>
              <p className='text-green-500 font-bold text-4xl'>Login</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='text-gray-400'>Use your Username and Password to Login</p>
            </div>
            <div className='flex flex-col items-center mt-5 space-y-3'>
              <div className='flex flex-row items-center space-x-2 bg-gray-200 w-80 p-2 rounded-md'>
                <FaRegEnvelope className='text-gray-400' />
                <input className='flex-1 bg-transparent text-sm outline-none' type="text" placeholder='' />
              </div>
              <div className='flex flex-row items-center space-x-2 bg-gray-200 w-80 p-2 rounded-md'>
                <MdLockOutline className='text-gray-400' />
                <input className='flex-1 bg-transparent text-sm outline-none' type="password" placeholder='' />
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row space-x-1'>
                  <input type="checkbox"/>
                  <label className='text-sm'>Remember me</label>
                </div>
                <div className='flex flex-row space-x-1'>
                  <a href='#' className='text-sm hover:underline hover:underline-offset-2'>Forget Password?</a>
                </div>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div className='border border-green-500 rounded-full px-16 py-1 text-semibold text-black hover:bg-green-500 hover:cursor-pointer' >Login</div>
              </div>
            </div>
            <div className='flex flex-row space-x-2 justify-center items-center mt-20'>
             <p className='rounded-full border border-gray-200 p-2 hover:cursor-pointer hover:bg-green-500 hover:text-white'><FaGithub /></p>
             <p className='rounded-full border border-gray-200 p-2 hover:cursor-pointer hover:bg-green-500 hover:text-white'><FaGoogle /></p>
             <p className='rounded-full border border-gray-200 p-2 hover:cursor-pointer hover:bg-green-500 hover:text-white'><FaInstagram /></p>
            </div>
          </div>
          {/* Register  */}
          <div className='w-2/5 p-5 bg-green-500 rounded-r-2xl py-36 px-auto'>
            <p className='text-white font-bold text-4xl pb-10'>No Account yet?</p>
            <p className='text-sm text-white'>Create a Free Account here!</p>
            <p className='text-sm text-white'>Explore the Basics and  Fundamentals</p>
            <div className='flex flex-row justify-center items-center mt-10'>
              <div className='text-white rounded-full border px-14 py-1 font-semibold border-green-100 hover:cursor-pointer hover:bg-white hover:text-green-500'>Register</div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
    
  )
}

export default Login
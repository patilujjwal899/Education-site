import React, { useState } from 'react'
import {FcGoogle} from "react-icons/fc"
import frame from "../assets/frame.png"
import login from "../assets/login.png"
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from 'react-hot-toast';

const Login = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({email:"", password:""});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event){
    setFormData(prevFormData =>{
      return{...prevFormData,
      [event.target.name]: event.target.value};
    }  )
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("logged In");
    navigate("/");
  }

  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>
        <div  className='w-11/12 max-w-[450px]'>
            <h1  className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>welcome back</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>Build skills for today, tomorrow, and beyond</span>
                <br/>
                <span className='text-blue-100 italic'>Education to future-proof carrer.</span>
            </p>

            <form className='flex flex-col w-full gap-y-4 mt-6'
             onSubmit={submitHandler}>
              <label className='w-full'>
                <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>
                  Email Address 
                  <sup className='text-pink-200'>*</sup>
                </p>
                <input
                  required
                  type='email'
                  placeholder='Enter Email'
                  value={formData.email}
                  onChange={changeHandler}
                  name='email'
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700'
                />
              </label>

              <label className='w-full relative'>
                <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>
                  Password 
                  <sup className='text-pink-200'>*</sup>
                </p>
                <input
                  required
                  type= {showPassword ? "text" : "password"}
                  placeholder='Enter Password'
                  value={formData.password}
                  onChange={changeHandler}
                  name='password'
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700'
                />
                <Link to='#'>
                  <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forget Password
                  </p>
                </Link>
                <span onClick={() => setShowPassword((prev) => !prev)}
                 className='absolute right-3 top-[38px] cursor-pointer'>
                  { showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                </span>

              </label>
              <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Sign In
              </button>
            </form>
            <div className='flex w-full items-center my-4 gap-x-2'>
              <div className='w-full h-[1px] bg-richblack-700'></div>
              <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
              <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up With Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px] '>
          <img src={frame} alt='frameimg' width={558} height={504} loading='lazy'/>
          <img src={login} alt='loginimg' width={558} height={504} loading='lazy' className='absolute -top-4 right-4' />
        </div>
    </div>
  )
}

export default Login
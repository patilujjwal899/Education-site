import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import frame from '../assets/frame.png'
import signup from '../assets/signup.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const SignUp = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({firstname:"",lastname:"",email:"",createpassword:"", confirmpassword:""});
  let navigate = useNavigate();
  const [showCreatePassword,setShowCreatePassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const [accountType,setAccountType] = useState("student");

  function changeHandler(event){
    setFormData(prevFormData => {
      return {...prevFormData,
        [event.target.name]: event.target.value}
    })
  }
  function submitHandler(event){
    event.preventDefault();
    if(formData.createpassword != formData.confirmpassword){
      toast.error("password don't match please try again");
    }
    else{
      navigate("/");
      toast.success("account created")
      setIsLoggedIn(true);
    }
  }
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>
          join the millions of learning to code with studyNotion for free
        </h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span className='text-richblack-100'>Build skills for today, tomorrow, and beyound</span>
          <br/>
          <span className='text-blue-100 italic'>Education to future-proof carrer.</span>
        </p>
        
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
          <button onClick={ () => setAccountType("student")}
          className={ `${accountType === "student"
            ?  
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
            student
          </button>
          <button onClick={ () => setAccountType("Instructor")}
          className={ `${accountType === "Instructor"
            ?  
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
            Instructor
          </button>
        </div>

        <form onSubmit={submitHandler}>
          <div className='flex justify-between mt-[20px]'>
            <label>
              <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>
                first name <sup className='text-pink-200'>*</sup></p>
              <input
                required
                type='text'
                placeholder='enter first name'
                name='firstname'
                value={formData.firstname}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700'
              />
            </label>
            <label>
              <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>
                last name <sup className='text-pink-200'>*</sup></p>
              <input
                required
                type='text'
                placeholder='enter last name'
                name='lastname'
                value={formData.lastname}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700'
              />
            </label>
          </div>
          <div>
            <label>
              <p className='text-[0.875rem text-richblack-5 mb-1 mt-3 leading-[1.375rem]'>
                Email address <sup className='text-pink-200'>*</sup></p>
              <input
                required
                type='email'
                placeholder='enter email'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700'
              />
            </label>
          </div>

          <div className='flex justify-between mt-[20px] gap-x-2'>
            <label className='w-full relative'>
              <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>
                Create Password <sup className='text-pink-200'>*</sup></p>
              <input
                required
                type={showCreatePassword ? 'text' : 'password'}
                placeholder='Create Password'
                name='createpassword'
                value={formData.createpassword}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700'
              />
              <span onClick={() => setShowCreatePassword((prev) => !prev)}
                 className='absolute right-3 top-[38px] cursor-pointer'>
                  { setShowCreatePassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
              </span>
            </label>

            <label className='w-full relative'>
              <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>
                Confirm Password <sup className='text-pink-200'>*</sup></p>
              <input
                required
                type= {showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                name='confirmpassword'
                value={formData.confirmpassword}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-700'
              />
              <span onClick={ () => setShowConfirmPassword((prev) =>  !prev)}
              className='absolute right-3 top-[38px] cursor-pointer'>
                {setShowConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
              </span>
            </label>
          </div>

          <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
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
        <img src={signup} alt='signupimg' width={558} height={504} loading='lazy' className='absolute -top-4 right-4'/>
      </div>
    </div>
  )
}

export default SignUp;
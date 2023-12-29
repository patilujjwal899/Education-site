import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Card = (props,{isLoggedIn}) => {
    let course = props.course;
    let navigate = useNavigate();

    function clickHandler(){
      if(isLoggedIn === true){
        toast.success("welcome now you can buy courses");
        navigate("/about");
      }
      else{
        toast.error("you are not logged In");
      }
    }
  return (
    <div className=' bg-richblack-700 w-[300px] bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
          <img src= {course.image.url} alt='image1'/>
        </div>
        <button onClick={clickHandler}
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 ml-3'>
          Buy Now
        </button>
        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>{course.description}</p>
        </div>
    </div>
  )
}

export default Card
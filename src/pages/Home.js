import React from 'react'
import Card from '../components/Card';

const Home = (props,{isLoggedIn}) => {
  let courses = props.courses;

  function getCourses(){
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allCourses.push(courseData);
      })
    })
    return allCourses;
  }


  return (
    <div 
    className="w-11/12 max-w-[1200px] 
    mx-auto flex flex-wrap justify-center items-center min-h-[50vh] my-6 gap-20 ">
      {
        getCourses().map ((course) => {
          return(<Card course={course} isLoggedIn={isLoggedIn}/>)
        })
      }
    </div>
  )
}

export default Home
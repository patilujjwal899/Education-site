import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState,useEffect } from "react";
import { apiUrl } from "./data";
import { toast } from 'react-hot-toast';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses,setCourses] = useState(Object);

  async function fetchData(){
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("something went wrong");
    }
  }
  useEffect(() => {
    fetchData();
  },[])

  return(
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home  courses={courses} isLoggedIn={isLoggedIn}/>} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;

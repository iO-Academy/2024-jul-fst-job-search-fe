import JobListings from "./components/JobListings/index.jsx";
import Nav from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {useState} from "react";
import PopularSkills from "./components/PopularSkills/index.jsx";

function App() {



  return (
    <>
      <Nav/>
      <JobListings/>
        <PopularSkills></PopularSkills>
      <Footer/>
    </>
  )
}
export default App

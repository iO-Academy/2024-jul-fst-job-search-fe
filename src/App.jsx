import 'bootstrap'
import './App.css'
import JobDescriptionModal from "./components/JobDescriptionModal/index.jsx";
import JobListings from "./components/JobListings/index.jsx";
import Nav from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {

  return (

    <>
      <Nav/>
      <JobListings />
      <Footer/>
        <JobDescriptionModal id={70}/>
    </>

  )
}

export default App

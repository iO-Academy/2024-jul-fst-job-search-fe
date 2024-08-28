import 'bootstrap'
import './App.css'
import JobSearch from "./components/JobSearch/index.jsx";
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
          <JobSearch/>
      </>
  )
}

export default App

import FilterCheckbox from "../FilterCheckbox/index.jsx";
import {useEffect, useState} from "react";
import NavFilter from "../NavFilter/index.jsx";


const Navbar = () => {
    const [navBarSelected, setNavBarSelected] = useState('')
    console.log(navBarSelected)
    const click = () => {}
    return (
        <nav className='navbar bg-light'>
            <div className='container justify-content-between'>
                <a className='navbar-brand'>JobSearch</a>
                <div className='row col-md-5 d-none d-md-inline text-center'>
                    <NavFilter  jobType='All jobs' selected={navBarSelected === 'All jobs'} click={()=>{
                        setNavBarSelected('All jobs')
                    }}/>
                    <NavFilter  jobType='Full time' selected={navBarSelected === 'Full time'} click={()=> {setNavBarSelected('Full time')}}/>
                    <NavFilter  jobType='Part time' selected={navBarSelected === 'Part time'} click={() => {setNavBarSelected('Part time')}}/>
                    <NavFilter  jobType='Contract' selected={navBarSelected === 'Contract'} click={() => {setNavBarSelected('Contract')}}/>

                </div>
                <button className='navbar-toggler border mb-2 d-md-none' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'>
                    <span className='navbar-toggler-icon border-0'></span>
                </button>
                <div className='collapse navbar-collapse border-0' id='navbarSupportedContent'>
                    <a className='dropdown-item text-end'>All Jobs</a>
                    <a className='dropdown-item text-end'>Full time</a>
                    <a className='dropdown-item text-end'>Part time</a>
                    <a className='dropdown-item text-end'>Contract</a>
                </div>
                <button className='border border-success d-none d-md-inline rounded text-success'>Post a job</button>
                <FilterCheckbox jobType='Full Time' />
                <FilterCheckbox jobType='Part Time' />
                <FilterCheckbox jobType='Contract Time' />
            </div>
        </nav>
    )
}
export default Navbar
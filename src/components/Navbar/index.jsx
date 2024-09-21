import NavFilter from "../NavFilter/index.jsx";


const Navbar = ({getSelected, setSelected}) => {
    return (
        <nav className='navbar bg-light col-12 px-0'>
            <div className='container justify-content-between'>
                <a className='navbar-brand'>JobSearch</a>
                <div className='row col-md-5 d-none d-md-inline text-center'>
                    <NavFilter  jobType='All jobs' selected={getSelected === 'All jobs'} click={()=>{
                        setSelected('All jobs')
                    }}/>
                    <NavFilter  jobType='Full time' selected={getSelected === 'Full time'} click={()=> {setSelected('Full time')}}/>
                    <NavFilter  jobType='Part time' selected={getSelected === 'Part time'} click={() => {setSelected('Part time')}}/>
                    <NavFilter  jobType='Contract' selected={getSelected === 'Contract'} click={() => {setSelected('Contract')}}/>

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
            </div>
        </nav>
    )
}
export default Navbar
const Header = ({header, setHeader, viewButton, setQuery, setViewButton}) => {

    const returnToRecent = () => {
        setHeader('Most recent jobs')
        setQuery('http://0.0.0.0:8080/jobs/recent')
        setViewButton('View all jobs ->')
    }

    const handleClick = () => {
        viewButton === 'View most recent jobs ->' && returnToRecent()
        console.log(header)
    }

    return (
        <header>
            <div className='row align-items-center justify-content-between mx-1 mx-md-0'>
                <h2 className='col-5 my-3 px-md-0 px-0 mx-1'>{header}</h2>
                <a className='col-5 text-end fs-6 text-decoration-none px-md-0 px-0 mx-1' 
                   onClick={handleClick}>{viewButton}</a>
            </div>
        </header>
    )
}
export default Header
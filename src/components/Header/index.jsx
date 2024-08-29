const Header = ({header, setHeader, viewButton, setQuery, setViewButton}) => {

    const returnToRecent = () => {
        setHeader('Most recent jobs')
        setQuery('http://0.0.0.0:8080/jobs/recent')
        setViewButton('View all jobs ->')

    }
    const handleClick = () => {
        viewButton === 'View most recent jobs ->' && returnToRecent()
    }

    return (
        <header>
            <div className={'row align-items-center justify-content-between'}>
                <h2 className={'col-6 my-3'}>{header}</h2>
                <a className={'col-5 text-end fs-6 text-decoration-none'} onClick={handleClick}>{viewButton}</a>
            </div>
        </header>
    )
}
export default Header
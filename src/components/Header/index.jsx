const Header = ({header, viewButton}) => {
    return (
        <header>
            <div className={'row align-items-center justify-content-between'}>
                <h2 className={'col-6 my-3'}>{header}</h2>
                <a className={'col-5 text-end fs-6 text-decoration-none'}>{viewButton}</a>
            </div>
        </header>
    )
}
export default Header
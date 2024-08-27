const Nav = () => {

    return (
        <div className={'navbar row justify-content-between align-items-center m-1'}>
            <h6 className={'col nav-item'}>JobSearch</h6>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
                Dropdown link
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )
}

export default Nav
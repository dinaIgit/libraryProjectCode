import { NavLink} from 'react-router-dom'

const Navigation = () => {

    return (
        <nav className="nav navbar-light bg-secondary p-2">
            <div className='container'>
                <div className='nav navbar-dark'>
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/books">Books</NavLink>
            <NavLink className="nav-link" to="/add_book">Add book</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
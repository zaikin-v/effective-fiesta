import '../assets/style/header.css'
import {Link} from "react-router-dom";

function Header() {
    return(
        <div>
            <div
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <div className="logo">KOTIK</div>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 link-dark">Home</Link></li>
                    <li><Link to="/cats" className="nav-link px-2 link-dark">Cats</Link></li>
                    <li><Link to="/dogs" className="nav-link px-2 link-dark">Dogs</Link></li>
                    <li><Link to="/bird" className="nav-link px-2 link-dark">Bird</Link></li>
                    <li><Link to="/rodents" className="nav-link px-2 link-dark">Rodents</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <a href="/cart" type="button" className="btn btn-outline-primary me-2">Shopping cart</a>
                </div>
            </div>
        </div>
    )
}

export default Header
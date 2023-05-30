import '../assets/style/header.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {

    const isLoggedIn = useSelector((state) => state.auth);

    return(
        <div>
            <div
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <div className="logo">УЧЕБА</div>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/groups" className="nav-link px-2 link-dark">Группы</Link></li>
                    <li><Link to="/disciplines" className="nav-link px-2 link-dark">Дисциплины</Link></li>
                </ul>
                <div>
                    {/* {isLoggedIn?
                        <div className="col-md-3 text-end">
                            <div className="btn-group" role="group" aria-label="Basic example">
                            <div>
                                <a href="/cart" type="button" className="btn btn-outline-primary">Shopping cart</a>
                            </div>
                            <div>
                                <Link to="/profile" className="btn btn-primary">Profile</Link>
                            </div>
                        </div>
                        </div>: */}
                    {/* } */}
                    Петр Иванович Иванов
                </div>

            </div>
        </div>
    )
}

export default Header
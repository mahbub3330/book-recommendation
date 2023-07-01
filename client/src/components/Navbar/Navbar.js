import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import RoutesPath from "../../RoutesPath";

const Navbar = ({signInStatus, handleSignOut}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);

    return (
        <nav className='navbar' id="navbar">
            <div className='container navbar-content flex'>
                <div className='brand-and-toggler flex flex-sb'>
                    <Link to={RoutesPath.home} className='navbar-brand flex'>
                        <img src={logoImg} alt="site logo"/>
                        <span className='text-uppercase fw-7 fs-24 ls-1'>Book Recommendation</span>
                    </Link>
                    <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
                        <HiOutlineMenuAlt3 size={35} style={{
                            color: `${toggleMenu ? "#fff" : "#010101"}`
                        }}/>
                    </button>
                </div>

                <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <Link to={RoutesPath.home} className='nav-link text-uppercase  fs-22 fw-6 ls-1'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={RoutesPath.profile} className='nav-link text-uppercase  fs-22 fw-6 ls-1'>
                                {signInStatus ? 'Profile' : 'Sign In'}
                            </Link>
                        </li>
                        {
                            signInStatus ?
                                <li className='nav-item'>
                                    <Link to={RoutesPath.home} onClick={handleSignOut}
                                          className='nav-link text-uppercase  fs-22 fw-6 ls-1'>
                                        Sign Out
                                    </Link>
                                </li>
                                : null
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
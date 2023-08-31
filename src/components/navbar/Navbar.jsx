import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import "../../../public/images/logo-text.jpg" as "logo-text";
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <i class="fab fa-typo3" />{" "} */}
            premanu foundation
            {/* <img src={require("./logo-text.jpg")} alt="premanu logo" className="logo-image" /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/what-we-do"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/getinvolved"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Get Involved
              </Link>
            </li>
            
          </ul>
          {button && <Link to="/getinvolved"><Button buttonStyle="btn--outline">Get Involved</Button></Link>}
        </div>
      </nav>
    </>
  );
};

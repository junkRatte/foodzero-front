import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenuClass = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenuNavLink = () => {
    setOpenMenu(false);
  }

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} />
        <div className="menu-icon" onClick={toggleMenuClass}>
          <span className="menu-icon-span-one"></span>
          <span className="menu-icon-span-two"></span>
          <span className="menu-icon-span-three"></span>
        </div>
      </div>
      <div className="nav-contact">
        <a href="tel:+86 852 346 000">+86 852 346 000</a>
        <a className="reservations-button" href="#">
          Reservations
        </a>
      </div>
      <div className={`menu ${openMenu ? "open-menu" : "close-menu"}`}>
        <div className="menu-icon-open menu-icon-two" onClick={toggleMenuClass}>
          <span className="menu-icon-span-one"></span>
          <span className="menu-icon-span-two"></span>
          <span className="menu-icon-span-three"></span>
        </div>
        <div className="menu-list">
          <ul>
            <Link to="/" onClick={closeMenuNavLink}>
              <li>Home</li>
            </Link>
            <Link to="/menu" onClick={closeMenuNavLink}>
              <li>Menu</li>
            </Link>
            <Link to="/blogs" onClick={closeMenuNavLink}>
              <li>Blogs</li>
            </Link>
            <Link to="/about" onClick={closeMenuNavLink}>
              <li>About</li>
            </Link>
            <Link to="/contact" onClick={closeMenuNavLink}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="menu-contact">
          <h3>Contact</h3>
          <div className="menu-contact-links">
            <a href="tel:+86 852 346 000">+86 852 346 000</a>
            <br />
            <a href="mailto:info@foodzero.com">info@foodzero.com</a>
          </div>
          <div className="menu-contact-address">
            <p>1959 Sepulveda Blvd.</p>
            <p>Culver City, CA, 90230</p>
          </div>
          <div className="social-links">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

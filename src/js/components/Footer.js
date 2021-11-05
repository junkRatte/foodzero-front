import React from "react";

function Footer() {
  return (
    <footer>
      <div className="layout-container">
        <div className="footer-top">
          <div className="wrapper">
            <h3>
              Food
              <br />
              Zero.
            </h3>
            <div className="footer-top-contact">
              <h5>Contact</h5>
              <div>
                <a href="tel:+86 852 346 000">+86 852 346 000</a>
                <br />
                <a href="mailto:info@foodzero.com">info@foodzero.com</a>
              </div>
              <div>
                <p>1959 Sepulveda Blvd.</p>
                <p>Culver City, CA, 90230</p>
              </div>
            </div>
            <div className="footer-top-form">
              <h5>Never Miss a Recipe</h5>
              <form>
                <input type="email" placeholder="Email Address" />
                <button type="submit">Subscribe</button>
              </form>
              <p>
                Join our subscribers and get best recipe delivered each week!
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrapper">
            <p>&copy; 2020 Zero Inc. All rights Reserved</p>
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
    </footer>
  );
}

export default Footer;

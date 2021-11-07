import React from "react";
import ContactImageOne from "../../../images/contactpage-image-one.png";
import ContactImageTwo from "../../../images/contactpage-image-two.png";
import OrangeImage from "../../../images/orange-image.svg";

function ContactpageContact() {
  return (
    <section className="contactpage-contact">
      <div className="layout-container">
        <div className="contactpage-contact-row row-1">
          <img className="orange-img" src={OrangeImage} />
          <img className="first-img" src={ContactImageOne} />
          <h5>
            We can be contacted via
            <br />
            email <a href="mailto:info@foodzero.com">info@foodzero.com</a>
            <br />
            or telephone on <a href="tel:+86 852 346 000">+86 852 346 000</a>
          </h5>
        </div>
        <div className="contactpage-contact-row row-2">
          <div>
            <h5>
              We are located in 1959 Sepulveda Blvd. Culver
              <br />
              City, CA 90230
            </h5>
            <button>View in maps</button>
          </div>
          <img className="second-img" src={ContactImageTwo} />
        </div>
      </div>
    </section>
  );
}

export default ContactpageContact;

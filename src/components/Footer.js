import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="container-fluid footer py-3">
      <div className="row justify-content-center">
        <div className="col-lg-auto col-mg-auto">
          <p>
            © 2017 The Sparks Foundation. All Rights Reserved | Design by
            <span>
              <a className="mx-1"
                style={{ color: "rgb(0, 191, 255)", textDecoration: "none" }}
                href="https://w3layouts.com/"
              >
                W3layouts
              </a>
            </span>
          </p>
        </div>
        <div class="col-lg-auto col-mg-auto">
          <a className="mx-1"
            target="_blank"
            href="https://www.facebook.com/thesparksfoundation.info"
          >
            <FaFacebookSquare />
          </a>
          <a
          className="mx-1"
            target="_blank"
            href="https://instagram.com/thesparksfoundation.info"
          >
            <FaInstagram />
          </a>
          <a className="mx-1" target="_blank" href="https://medium.com/thesparksfoundation">
          <FaMediumM />
          </a>
          <a className="mx-1" target="_blank" href="https://thesparksfoundation.info">
          <FaPinterest />
          </a>
          <a className="mx-1" target="_blank" href="https://thesparksfoundation.info">
          <FaGlobeAmericas />
          </a>
          <a className="mx-1" target="_blank" href="https://twitter.com/tsfsingapore">
          <FaTwitter />
          </a>
          <a className="mx-1"
            target="_blank"
            href="https://www.linkedin.com/company/the-sparks-foundation/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

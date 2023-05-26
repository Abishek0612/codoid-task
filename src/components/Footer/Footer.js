import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        TANTUM PROJECTS
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">ABOUT US</a>
        </li>
        <li>
          <a href="#whatwedo">WHAT WE DO</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#blogs">BLOGS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="mailto:uabishek6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>

        <a
          href="https://api.whatsapp.com/send"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWhatsApp />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; TANTUM PROJECTS. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

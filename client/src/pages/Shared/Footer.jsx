import logo from "../../assets/images/banner/logo.svg";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <img className="h-12 text-white" src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br /> trainer who is also a serial .
        </p>
        <div className="flex space-x-3">
        <FaGoogle />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
        </div>

      </aside>
      <nav>
        <h6 className="font-bold">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="font-bold">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </nav>
      <nav>
        <h6 className="font-bold">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;

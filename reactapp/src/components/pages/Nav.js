import { Outlet, Link } from "react-router-dom";
import '../../styles/Nav.css';

export default function Nav(props) {
  return (
    <>
      <nav className={`nav ${props.className || ''}`}>
        <Link to="/">
          <p className="link-item home-text">
            <img className="logo" src="/images/NF_logo_white_50x55@72.png" />
            <strong>Nathan Fletcher</strong>
          </p>
        </Link>
        <Link to="/Resume">
          <p className="link-item">
            Resume
          </p>
        </Link>
        <Link to="/AboutMe">
          <p className="link-item">
            About Me
          </p>
        </Link>
        <Link to="/BookletsAndMagazines">
          <p className="link-item">
            Booklets and Magazines
          </p>
        </Link>
        <Link to="/LogosAndWeb">
          <p className="link-item">
            Logos and Web
          </p>
        </Link>
        <Link to="/Posters">
          <p className="link-item">
            Posters
          </p>
        </Link>
        <Link to="/AllWork">
          <p className="link-item">
            All Work
          </p>
        </Link>
      </nav>

      <Outlet />
    </>
  )
};
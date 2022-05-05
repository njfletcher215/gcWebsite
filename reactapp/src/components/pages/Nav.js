import { Outlet, Link } from "react-router-dom";
import '../../styles/Nav.css';

export default function Nav(props) {
  return (
    <>
      <nav className={`nav ${props.className || ''}`}>
        <Link to="/">
          <p className="link_item home_text">
            <img className="logo" src="/images/NF_logo_white_50x55@72.png" />
            <strong>Nathan Fletcher</strong>
          </p>
        </Link>
        <Link to="/Resume">
          <p className="link_item">
            Resume
          </p>
        </Link>
        <Link to="/AboutMe">
          <p className="link_item">
            About Me
          </p>
        </Link>
        <Link to="/BookletsAndMagazines">
          <p className="link_item">
            Booklets and Magazines
          </p>
        </Link>
        <Link to="/LogosAndWeb">
          <p className="link_item">
            Logos and Web
          </p>
        </Link>
        <Link to="/Posters">
          <p className="link_item">
            Posters
          </p>
        </Link>
      </nav>

      <Outlet />
    </>
  )
};
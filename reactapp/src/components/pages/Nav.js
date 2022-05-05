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
        <Link to="/Print">
          <p className="link-item">
            Print
          </p>
        </Link>
        <Link to="/Digital">
          <p className="link-item">
            Digital
          </p>
        </Link>
        <Link to="/Identity">
          <p className="link-item">
            Identity
          </p>
        </Link>
      </nav>

      <Outlet />
    </>
  )
};
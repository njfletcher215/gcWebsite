import { Outlet, Link } from "react-router-dom";
import '../../styles/Home.css';

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li>
            <Link to="/BookletsAndMagazines">Booklets and Magazines</Link>
          </li>
          <li>
            <Link to="/LogosAndWeb">Logos and Web</Link>
          </li>
          <li>
            <Link to="/Posters">Posters</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
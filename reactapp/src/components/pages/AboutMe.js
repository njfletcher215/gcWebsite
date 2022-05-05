import '../../styles/AboutMe.css';
import { Link } from 'react-router-dom';

export default function AboutMe(props) {
  return (
    <div className={`about-me ${props.className || ''}`}>
      <p className="description">
        <h1>About Me</h1>
        I am a Graphic Designer currently studying at Loyola University of Chicago. 
        I am interested in the intersection of technology and design, 
        and want to explore web design. <Link to="/Resume">View my resume.</Link>
      </p>
      <p className="contact-info">
        <h1>Contact Info</h1>
        njfletcher215@gmail.com<br />
        (402)216-8557<br />
      </p>
    </div>
  );
}
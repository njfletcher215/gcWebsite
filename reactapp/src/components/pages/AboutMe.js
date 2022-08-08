import { Link } from 'react-router-dom';

export default function AboutMe(props) {
  return (
    <div className={`about-me ${props.className || ''}`}>
      <div className="headshot">
        <img src="/images/nathan466x668@144.jpg" />
      </div>
      <div className="description">
        <p className="bio">
          <h1>About Me</h1>
          I am a Graphic Designer and Web Developer<br />
          currently studying at Loyola University of Chicago.<br />
          I am interested in the intersection of technology and design,<br />
          and want to explore interactive visual experiences. <Link id="view-my-resume" to="/Resume">View my resume.</Link>
        </p>
        <p className="contact-info">
          <h1>Contact Info</h1>
          njfletcher215@gmail.com<br />
          (402)216-8557<br />
        </p>
      </div>
    </div>
  );
}
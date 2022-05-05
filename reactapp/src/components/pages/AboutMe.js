import '../../styles/AboutMe.css';

export default function AboutMe(props) {
  return (
    <div className={`about-me ${props.className || ''}`}>
      <p>
        About Me
      </p>
    </div>
  );
}
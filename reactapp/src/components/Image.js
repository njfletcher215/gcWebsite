import '../styles/Image.css';
import { Link } from 'react-router-dom';

export default function Image(props) {
  return (
    <div className={`image ${props.className || ''}`}>
      <Link className="link" to={props.link}>
        <img src={props.source} />
        <p className="hover-text">{props.hoverText}</p>
      </Link>
    </div>
  );
}
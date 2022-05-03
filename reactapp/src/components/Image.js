import '../styles/Image.css';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <div className="Image">
      <Link to={props.link}>
        <img src={props.source} />
      </Link>
    </div>
  );
}
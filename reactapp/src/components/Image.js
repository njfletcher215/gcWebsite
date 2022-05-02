import '../styles/Image.css';

export default function Footer(props) {
  return (
    <div className="Image">
      <a href={props.link}>
        <img src={props.source} />
      </a>
    </div>
  );
}
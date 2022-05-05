import '../../styles/Posters.css';

export default function Posters(props) {
  return (
    <div className={`posters ${props.className || ''}`}>
      <p>
        Posters
      </p>
    </div>
  );
}
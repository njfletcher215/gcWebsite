import '../../styles/Digital.css';

export default function Digital(props) {
  return (
    <div className={`digital ${props.className || ''}`}>
      <p>
        Internet History Infographic<br />
        Beaming<br />
        Abstract Series<br />
        El Lissitzky Showcase<br />
        Digital Collage Series<br />
        Digital Portrait Series<br />
      </p>
    </div>
  );
}
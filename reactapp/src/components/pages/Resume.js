import '../../styles/Resume.css';

export default function Resume(props) {
  return (
    <div className={`resume ${props.className || ''}`}>
      <p>
        PDF holder
      </p>
      <p>
        <a>download</a>
      </p>
    </div>
  );
}
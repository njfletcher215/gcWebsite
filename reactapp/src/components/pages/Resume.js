import '../../styles/Resume.css';

export default function Resume(props) {
  return (
    <div className={`resume ${props.className || ''}`}>
      <p>
        Resume
      </p>
    </div>
  );
}
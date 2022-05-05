import '../../styles/Identity.css';

export default function Identity(props) {
  return (
    <div className={`identity ${props.className || ''}`}>
      <p>
        Identity
      </p>
    </div>
  );
}
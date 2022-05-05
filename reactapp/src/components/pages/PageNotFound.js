import '../../styles/PageNotFound.css';

export default function PageNotFound(props) {
  return (
    <div className={`page-not-found ${props.className || ''}`}>
      <p>
        Page Not Found
      </p>
    </div>
  );
}

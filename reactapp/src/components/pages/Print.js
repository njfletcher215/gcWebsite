import '../../styles/Print.css';

export default function Print(props) {
  return (
    <div className={`print ${props.className || ''}`}>
      <p>
        Print
      </p>
    </div>
  );
}
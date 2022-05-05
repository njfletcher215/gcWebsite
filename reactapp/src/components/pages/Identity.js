import '../../styles/Identity.css';

export default function Identity(props) {
  return (
    <div className={`identity ${props.className || ''}`}>
      <p>
        Save_As<br />
        Bach<br />
        Soldato<br />
        thirdeye<br />
        Zoo App<br />
        Demograph<br />
      </p>
    </div>
  );
}
import '../../styles/Print.css';

export default function Print(props) {
  return (
    <div className={`print ${props.className || ''}`}>
      <p>
        Technology and Capital<br />
        The Speech<br />
        Bibere Venenum in Auro<br />
        Skyline<br />
        Urban Code<br />
        Typographic Sequences<br />
        Cookbook<br />
      </p>
    </div>
  );
}
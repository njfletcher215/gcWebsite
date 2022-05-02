import '../styles/Footer.css';

export default function Footer(props) {
  return (
    <div className="Footer">
      <p>
        Footer for page {props.page_name}
      </p>
    </div>
  );
}
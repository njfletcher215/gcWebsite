import '../../styles/BookletsAndMagazines.css';

export default function BookletsAndMagazines(props) {
  return (
    <div className={`booklets-and-magazines ${props.className || ''}`}>
      <p>
        Booklets and Magazines
      </p>
    </div>
  );
}
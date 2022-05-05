import '../styles/List.css';

export default function Image(props) {
  return (
    <div className={`list ${props.className || ''}`}>
        <div className='name'>{props.listName}</div>
        <div className='content'>{props.children}</div>
    </div>
  );
}
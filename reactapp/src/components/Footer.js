import '../styles/Footer.css';

export default function Footer(props) {
  return (
    <div className={`footer ${props.className || ''}`}>
      <div className="footer-item contact-box">
        <span>
          <p className="contact-box-header">
            Contact
          </p>
          <p className="contact-box-content">
            Nathan Fletcher<br />
            njfletcher215@gmail.com<br />
            (402)216-8557
          </p>
        </span>
      </div>
      <div className="footer-item page-name">
        <span>
          <p className="page-name-content">
            <strong>{props.page_name}</strong>
          </p>
        </span>
      </div>
      <div className="footer-item back-to-top-container">
        <span>
          <p className="back-to-top">
            <a id="back-to-top" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}>^ Back to Top</a>
          </p>
        </span>
      </div>
    </div>
  );
}
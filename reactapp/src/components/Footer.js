import '../styles/Footer.css';

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer_item contact_box">
        <span>
          <p className="contact_box_header">
            Contact
          </p>
          <p className="contact_box_content">
            Nathan Fletcher<br />
            njfletcher215@gmail.com<br />
            (402)216-8557
          </p>
        </span>
      </div>
      <div className="footer_item page_name">
        <span>
          <p className="page_name_content">
            <strong>{props.page_name}</strong>
          </p>
        </span>
      </div>
      <div className="footer_item back_to_top">
        <span>
          <p className="back_to_top_content">
            ^ Back to Top
          </p>
        </span>
      </div>
    </div>
  );
}
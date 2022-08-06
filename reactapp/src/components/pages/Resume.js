import '../../styles/Resume.css';

export default function Resume(props) {
  return (
    <div className={`resume ${props.className || ''}`}>
      <iframe src= "/resume/Fletcher_Nathan_Resume.pdf" />
      <div id="download-link-container">
        <a id="download-link" href="/resume/Fletcher_Nathan_Resume.pdf" download>download resume</a>
      </div>
    </div>
  );
}
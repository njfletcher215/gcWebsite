import '../../styles/Home.css';
import Image from '../Image';

export default function Home(props) {
  return (
    <div className={`home ${props.className || ''}`}>
      <Image className="home-image" link="/AboutMe" hoverText="View Save_As Campaign" source='/work/FNAR332/SaveAsCampain/final/Mockups/Logo_Mockup_2300x1500@72.png'/>
    </div>
  );
}
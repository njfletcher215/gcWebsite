import Image from '../Image';

export default function Digital(props) {
  return (
    <div className={`digital ${props.className || ''}`}>
      <div className="work-image-container">
        <Image className="work-image" link="/InternetHistoryInfographic" source="/work/FNAR382/InternetHistoryInfographic/final/Still2_cropped_864x1296@144.png" />
        <Image className="work-image" link="/Beaming" source="/work/FNAR234/Beaming/final/Poster_Cropped_2200x3300@300.jpg" />
        <Image className="work-image" link="/AbstractSeries" source="/work/FNAR233/AbstractSeries/final/Composition4_Cropped_1333x2000@72.png" />
        <Image className="work-image" link="/ElLissitzkyShowcase" source="/work/FNAR132/ElLissitzkyShowcase/final/Homepage_Cropped_8000x12000@300.jpg" />
        <Image className="work-image" link="/DigitalCollageSeries" source="/work/FNAR233/DigitalCollageSeries/final/Collage1_Cropped_536x804@72.jpg" />
        <Image className="work-image" link="/DigitalPortraitSeries" source="/work/FNAR233/DigitalPortraitSeries/final/Portrait_Cropped_1333x2000@72.jpg" />
      </div>
    </div>
  );
}
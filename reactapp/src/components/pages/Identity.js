import Image from '../Image';

export default function Identity(props) {
  return (
    <div className={`identity ${props.className || ''}`}>
      <div className="work-image-container">
        <Image className="work-image" link="/SaveAsCampaign" source="/work/FNAR332/SaveAsCampaign/final/Mockups/Logo_Mockup_Cropped_870x1305@72.png" />
        <Image className="work-image" link="/Bach" source="/work/FNAR382/Bach/final/Mockups/BottleFront_Mockup_Cropped_2688x4032@300.JPG" />
        <Image className="work-image" link="/Thirdeye" source="/work/FNAR232/Thirdeye/final/Page1_Cropped_2200x3300@300.jpg" />
        <Image className="work-image" link="/Soldato" source="/work/FNAR382/Soldato/final/TheBoss_Cropped_2269x3404@72.png" />
        <Image className="work-image" link="/Zoo App" source="/work/FNAR234/ZooApp/final/Logo_Cropped_802x1202@300.png" />
        <Image className="work-image" link="/Demograph" source="/work/FNAR234/Demograph/final/Logo1_Cropped_2200x3300@300.jpg" />
      </div>
    </div>
  );
}
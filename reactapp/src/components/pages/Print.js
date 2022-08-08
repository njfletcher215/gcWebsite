import Image from '../Image';

export default function Print(props) {
  return (
    <div className={`print ${props.className || ''}`}>
      <div className="work-image-container">
        <Image className="work-image" link="/TechnologyAndCapital" source="/work/FNAR132/TechnologyAndCapital/final/Poster_Cropped_3156x4733@300.jpg" />
        <Image className="work-image" link="/TheSpeech" source="/work/FNAR232/TheSpeech/final/Page1_cropped_1650x2475@300.jpg" />
        <Image className="work-image" link="/BibereVenenumInAuro" source="/work/FNAR234/BibereVenenumInAuro/final/Poster_Cropped_3300x4950@300.jpg" />
        <Image className="work-image" link="/Skyline" source="/work/FNAR234/Skyline/final/Cover_Cropped_2823x4235@300.png" />
        <Image className="work-image" link="/UrbanCode" source="/work/FNAR232/UrbanCode/final/Poster_cropped_4800x7200@300.jpg" />
        <Image className="work-image" link="/TypographicSequences" source="/work/FNAR132/TypographicSequences/final/Sequence2_Cropped_3300x4950@300.jpg" />
      </div>
    </div>
  );
}
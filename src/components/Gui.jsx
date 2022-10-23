import './Gui.css';
// import BlazeSlider from 'blaze-slider';
import 'blaze-slider/dist/blaze.css';
import './SliderImages';
// import { SliderImages } from './SliderImages';
import { useBlazeSlider } from 'react-blaze-slider';
import 'blaze-slider/dist/blaze.css';
import { SliderImages } from './SliderImages';

export default function Gui() {
  // const el = document.querySelector('.blaze-slider');
  // new BlazeSlider(el);

  const ref = useBlazeSlider({
    all: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  });

  return (
    <div className="blaze-slider" ref={ref}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            <img src="../midjourney/galaxy-cat-whale.png" />
            <img src="../midjourney/man-and-cat.png" />
            <img src="../midjourney/cyberpunk-self.png" />
            <img src="../midjourney/rev-war-selfie1.png" />
            <img src="../midjourney/lunar-warfare.png" />
            <img src="../midjourney/ghibli-me.png" />
            <img src="../midjourney/abiogenesis1.png" />
            <img src="../midjourney/cyberpunk-self.png" />
            <img src="../midjourney/nuclear-winter.png" />
            <img src="../midjourney/couple-explosion.png" />
            <img src="../midjourney/corndog-buddha.png" />
            <img src="../midjourney/hollow-earth.png" />
            <img src="../midjourney/humans-last-stage.png" />
            <img src="../midjourney/last-picture-humans.png" />
            <img src="../midjourney/ai-vs-human.png" />
            <img src="../midjourney/soul-hug.png" />
            <img src="../midjourney/bedroom-shipwreck.png" />
            <img src="../midjourney/sound-of-silence.png" />
            <img src="../midjourney/rev-war-selfie2.png" />
            <img src="../midjourney/collapsed-city.png" />
            <img src="../midjourney/courage.png" />
            <img src="../midjourney/golden-ship.png" />
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="blaze-prev">prev</button>
        <div className="blaze-pagination"></div>
        <button className="blaze-next">next</button>
      </div>
    </div>
  );
}

import "./Video.scss";

import playIcon from "../../assets/icons/play.svg";
import fullScreenIcon from "../../assets/icons/fullscreen.svg";
import volumeUpIcon from "../../assets/icons/volume_up.svg";

const Video = ({ image }) => {
  const poster = image || "https://i.imgur.com/l2Xfgpl.jpg";

  return (
    <section className="video">
      <div className="video__container">
        <video className="video__hero" src="" poster={poster}></video>

        <div className="video__controls">
          <button className="video__button-play">
            <img className="video__play-icon" src={playIcon} alt="Play" />
          </button>

          <div className="video__progress">
            <progress
              className="video__progress-bar"
              max={100}
              value={0}
            ></progress>
            <span className="video__time">0:00/4:01</span>
          </div>
          <div className="video__size-volume">
            <button className="video__button-screen">
              <img
                className="video__size-volume-button"
                src={fullScreenIcon}
                alt="Full Screen"
              />
            </button>
            <button className="video__button-volume">
              <img
                className="video__size-volume-button"
                src={volumeUpIcon}
                alt="Volume"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;

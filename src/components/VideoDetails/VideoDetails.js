import { formatDistanceToNow } from "date-fns";
import { enCA } from "date-fns/locale";

import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoDetails = ({
  video: { title, channel, description, views, likes, timestamp, comments },
}) => {
  return (
    <section className="video-details">
      <h1 className="video-details__title">{title}</h1>

      <div className="video-details__container">
        <div className="video-details__left">
          <p className="video-details__text video-details__text--header">
            By {channel}
          </p>
          <p className="video-details__text">
            {timestamp &&
              formatDistanceToNow(new Date(timestamp), {
                locale: enCA,
              })}
          </p>
        </div>

        <div className="video-details__right">
          <div className="video-details__view-container">
            <img className="video-details__icons" src={viewsIcon} alt="Views" />
            <p className="video-details__text"> {views}</p>
          </div>
          <div className="video-details__view-container">
            <img className="video-details__icons" src={likesIcon} alt="Likes" />
            <p className="video-details__text"> {likes}</p>
          </div>
        </div>
      </div>

      {description && (
        <p className="video-details__description">{description}</p>
      )}

      <p className="video-details__comments">{comments?.length} Comments</p>
    </section>
  );
};

export default VideoDetails;

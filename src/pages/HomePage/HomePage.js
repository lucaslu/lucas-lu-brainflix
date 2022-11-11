import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";

import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";

const HomePage = ({ video, videos, searchVideoById }) => {
  const params = useParams();

  useEffect(() => {
    if (params.videoId) {
      searchVideoById(params.videoId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.videoId]);

  return (
    <>
      {video && <Video image={video.image} />}
      <section className="home-page__container">
        <section className="home-page__container-left">
          {video && <VideoDetails video={video} />}
          {video.comments && <Comments comments={video.comments} />}
        </section>
        {videos && <SideBar videos={videos} />}
      </section>
    </>
  );
};

export default HomePage;

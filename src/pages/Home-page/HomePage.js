import "./HomePage.scss";

import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";

const HomePage = ({ video, videos, onClick }) => {
  return (
    <>
      <Video image={video.image} />
      <section className="home-page__container">
        <section className="home-page__container-left">
          <VideoDetails video={video} />
          <Comments comments={video.comments} />
        </section>
        <SideBar videos={videos} onClick={onClick} />
      </section>
    </>
  );
};

export default HomePage;

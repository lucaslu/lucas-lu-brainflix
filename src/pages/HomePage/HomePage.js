import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api";

import "./HomePage.scss";
import SideBar from "../../components/SideBar/SideBar";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState({});

  const defaultVideoId = videos.length > 0 ? videos[0].id : null;
  const { videoId } = useParams();
  let videoToDisplay = videoId || defaultVideoId;

  useEffect(() => {
    // axios.get(API_URL + API_KEY).then((response) => setVideos(response.data));
    axios.get(API_URL).then((response) => setVideos(response.data));
  }, []);

  const getVideoDetail = () => {
    videoToDisplay &&
      axios
        // .get(`${API_URL}/${videoToDisplay}${API_KEY}`)
        .get(`${API_URL}/${videoToDisplay}`)
        .then((response) => setVideoDetail(response.data));
  };

  useEffect(() => {
    getVideoDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoToDisplay]);

  const filteredVideos = videos.filter((video) => video.id !== videoToDisplay);

  return (
    <>
      <Video image={videoDetail.image} />
      <section className="home-page__container">
        <section className="home-page__container-left">
          <VideoDetails video={videoDetail} />
          {videoDetail.comments && (
            <Comments
              videoId={videoToDisplay}
              render={getVideoDetail}
              comments={videoDetail.comments}
            />
          )}
        </section>
        <SideBar videos={filteredVideos} />
      </section>
    </>
  );
};

export default HomePage;

import { useState } from "react";
import { getVideos, getVideoDetails } from "./utils/utils";
import "./App.scss";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";
import Video from "./components/Video/Video";

const App = () => {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const handleClick = (clickEvnt, videoIdClickedOn) => {
    setVideoId(videoIdClickedOn);
    setVideos(getVideos(videoIdClickedOn));
    setVideoDetails(getVideoDetails(videoIdClickedOn));
  };

  // console.table("videos", videos);
  // console.table("videoDetails", videoDetails);
  return (
    <>
      <Header />
      <main>
        <Video image={videoDetails.image} />
        <VideoDetails video={videoDetails} />
        <Comments comments={videoDetails.comments} />
      </main>
      <SideBar videos={videos} onClick={handleClick} />
    </>
  );
};

export default App;

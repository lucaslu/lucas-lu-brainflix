import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getVideos, getVideoDetails } from "./utils/utils";
import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from "./pages/Home-page/HomePage";

const App = () => {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const handleClick = (clickEvnt, videoIdClickedOn) => {
    clickEvnt.preventDefault();
    setVideoId(videoIdClickedOn);
    setVideos(getVideos(videoIdClickedOn));
    setVideoDetails(getVideoDetails(videoIdClickedOn));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              video={videoDetails}
              videos={videos}
              onClick={handleClick}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

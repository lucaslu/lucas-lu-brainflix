import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { getVideos, getVideoDetails } from "./utils/utils";
import axios from "axios";
import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

const URL = `https://project-2-api.herokuapp.com/videos?api_key=${process.env.REACT_APP_BRAINFLIX_API_KEY}`;
const searchByVideoId = (videoId) =>
  `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${process.env.REACT_APP_BRAINFLIX_API_KEY}`;

const App = () => {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  // const [videoId, setVideoId] = useState("");
  // const [videos, setVideos] = useState(getVideos(videoId));

  const [videos, setVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  // const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));
  const [videoDetails, setVideoDetails] = useState({});

  // const handleClick = (clickEvnt, videoIdClickedOn) => {
  //   clickEvnt.preventDefault();
  //   setVideoId(videoIdClickedOn);
  //   setVideos(getVideos(videoIdClickedOn));
  //   setVideoDetails(getVideoDetails(videoIdClickedOn));
  // };

  const searchVideoById = async (videoId) => {
    setVideoId(videoId);
    // const { data } = await axios.get(URL);

    const filteredData = allVideos.filter((video) => video.id !== videoId);
    setVideos(filteredData);

    const response = await axios.get(searchByVideoId(videoId));
    setVideoDetails(response.data);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(URL);
        setVideoId(data[0].id);
        setAllVideos(data);
        const filteredData = data.filter((video) => video.id !== videoId);
        setVideos(filteredData);

        const videoDetails = await axios.get(searchByVideoId(videoId));
        setVideoDetails(videoDetails.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchVideos();

    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(URL)
  //     .then(({ data }) => {
  //       setVideoId(data[0].id);
  //       const filteredData = data.filter((video) => video.id !== videoId);
  //       setVideos(filteredData);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(searchByVideoId(videoId))
  //     .then(({ data }) => {
  //       setVideoDetails(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage video={videoDetails} videos={videos} />}
        />
        <Route path="upload" element={<VideoUpload />} />
        <Route
          path="video/:videoId"
          element={
            <HomePage
              video={videoDetails}
              videos={videos}
              searchVideoById={searchVideoById}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

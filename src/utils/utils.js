import videos from "../data/videos.json";
import videosDetails from "../data/video-details.json";

export const getVideos = (videoId) =>
  videos.filter((video) => video.id !== videoId);

export const getVideoDetails = (videoId) =>
  videosDetails.find((video) => video.id === videoId);

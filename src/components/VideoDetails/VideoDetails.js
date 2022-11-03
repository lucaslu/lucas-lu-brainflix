const VideoDetails = ({ video }) => {
  const { channel, description, views, like, timestamp } = video;
  return (
    <>
      <p>{channel}</p>
      <p>{description}</p>
      <p>{views}</p>
      <p>{like}</p>
      <p>{new Date(timestamp).toDateString()}</p>
    </>
  );
};

export default VideoDetails;

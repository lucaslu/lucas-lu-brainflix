import "./SideBar.scss";

const SideBar = ({ videos, onClick }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">NEXT VIDEOS</h2>

      {videos.map((video) => (
        <article className="sidebar__videos">
          <img
            className="sidebar__image"
            key={video.id}
            src={video.image}
            alt={video.title}
            width={100}
            onClick={(clickEvnt) => onClick(clickEvnt, video.id)}
          />
          <div className="sidebar__container">
            <h3 className="sidebar__name">{video.title}</h3>
            <p className="sidebar__channel">{video.channel}</p>
          </div>
        </article>
      ))}
    </aside>
  );
};

export default SideBar;

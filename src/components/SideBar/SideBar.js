import "./SideBar.scss";
import { Link } from "react-router-dom";

const SideBar = ({ videos }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">NEXT VIDEOS</h2>

      {videos.map(({ id, title, channel, image }) => (
        <article key={id} className="sidebar__videos">
          <Link to={`/video/${id}`}>
            <img className="sidebar__image" key={id} src={image} alt={title} />
          </Link>
          <div className="sidebar__container">
            <h3 className="sidebar__name">{title}</h3>
            <p className="sidebar__channel">{channel}</p>
          </div>
        </article>
      ))}
    </aside>
  );
};

export default SideBar;

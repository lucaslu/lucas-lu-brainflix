import React from "react";

const SideBar = ({ videos, onClick }) => {
  return (
    <aside className="sidebar">
      {videos.map((video) => (
        <img
          key={video.id}
          src={video.image}
          alt={video.title}
          width={100}
          onClick={(clickEvnt) => onClick(clickEvnt, video.id)}
        />
      ))}
    </aside>
  );
};

export default SideBar;

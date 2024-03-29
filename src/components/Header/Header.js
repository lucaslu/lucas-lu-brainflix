import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../assets/logos/brainflix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import avatar from "../../assets/images/mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="header__search">
        <div className="header__search-container">
          <img className="header__search-icon" src={searchIcon} alt="Search" />
          <input
            className="header__search-input"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="header__button-tablet">
          <Link to="upload">
            <button className="header__button">
              <img src={uploadIcon} alt="Upload" />
              <p className="header__button-text">UPLOAD</p>
            </button>
          </Link>
        </div>
        <img className="header__avatar" src={avatar} alt="Mohan Muruge" />
      </div>

      <div className="header__button-mobile">
        <Link to="upload">
          <button className="header__button">
            <img src={uploadIcon} alt="Upload" />
            <p className="header__button-text">UPLOAD</p>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

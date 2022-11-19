/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "./Upload.scss";
import publishIcon from "../../assets/icons/publish.svg";
import videoPreview from "../../assets/images/upload-video-preview.jpg";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_BACKEND;

  const isFormValid = () => {
    if (!title || !description) return false;

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      const newUpload = {
        title,
        description,
        image: `image${Math.floor(Math.random() * 9)}.jpeg`,
      };
      axios.post(API_URL, newUpload);

      alert("Video Uploaded");
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form onSubmit={handleSubmit}>
        <div className="upload__container">
          <div className="upload__left">
            <p className="upload__label">VIDEO THUMBNAIL</p>
            <img
              className="upload__video-preview"
              src={videoPreview}
              alt="Video Preview"
            />
          </div>
          <div className="upload__right">
            <label className="upload__label" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__video-name"
              type="text"
              name="title"
              placeholder="Add a title to your video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="upload__label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__video-description"
              name="description"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="upload__publish-container">
          <button className="upload__publish" type="submit">
            <img src={publishIcon} alt="Publish" />
            <p className="upload__publish-text">PUBLISH</p>
          </button>

          <Link className="upload__cancel" to="/">
            CANCEL
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Upload;

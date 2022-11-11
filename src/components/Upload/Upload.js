/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "./Upload.scss";
import publishIcon from "../../assets/icons/publish.svg";
import videoPreview from "../../assets/images/upload-video-preview.jpg";

const Upload = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const isFormValid = () => {
    if (!name || !description) return false;

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      Toastify({
        text: "Video Uploaded!",
        duration: 1500,
        className: "upload__toast",
      }).showToast();
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } else {
      console.log("Failed");
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
            <label className="upload__label" htmlFor="name">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__video-name"
              type="text"
              name="name"
              placeholder="Add a title to your video"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <a className="upload__cancel" href="#">
            CANCEL
          </a>
        </div>
      </form>
    </section>
  );
};

export default Upload;

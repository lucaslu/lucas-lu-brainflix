/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Upload.scss";
import publishIcon from "../../assets/icons/publish.svg";
import videoPreview from "../../assets/images/upload-video-preview.jpg";

const Upload = () => {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <p className="upload__label">VIDEO THUMBNAIL</p>
      <img
        className="upload__video-preview"
        src={videoPreview}
        alt="Video Preview"
      />
      <form>
        <label className="upload__label" htmlFor="video-name">
          TITLE YOUR VIDEO
        </label>
        <input
          className="upload__video-name"
          type="text"
          name="video-name"
          placeholder="Add a title to your video"
        />
        <label className="upload__label" htmlFor="video-description">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          className="upload__video-description"
          name="video-description"
          placeholder="Add a description to your video"
        ></textarea>

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

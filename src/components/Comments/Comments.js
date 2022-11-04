import "./Comments.scss";
import mohanImg from "../../assets/images/mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";

const Comments = ({ comments }) => {
  return (
    <section className="comments">
      <div className="comments__container">
        <div className="comments__left">
          <img className="comments__avatar" src={mohanImg} alt="Mohan Muruge" />
        </div>
        <div className="comments__right">
          <form className="comments__form">
            <label className="comments__title" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <div className="comments__textarea-button-container">
              <textarea
                className="comments__textarea"
                name="comment"
                placeholder="Add a new comment"
              ></textarea>
              <button className="comments__button" type="submit">
                <img src={addCommentIcon} alt="Comment" />
                <p className="comments__button-text">COMMENT</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="comments__divider" />

      {comments.map((comment) => (
        <>
          <article className="comments__posts">
            <div className="comments__left">
              <div className="comments__avatar comments__avatar--no-avatar"></div>
            </div>
            <div className="comments__right">
              <div className="comments__posts-container">
                <p className="comments__name">{comment.name}</p>
                <p className="comments__date">
                  {new Date(comment.timestamp).toLocaleString("en-US", {
                    timezone: "America/New_York",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
              <p className="comments__text">{comment.comment}</p>
            </div>
          </article>
          <hr className="comments__divider" />
        </>
      ))}
    </section>
  );
};

export default Comments;

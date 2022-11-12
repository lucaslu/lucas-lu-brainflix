import { useState } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { enCA } from "date-fns/locale";
import { API_URL, API_KEY } from "../../utils/api";
import "./Comments.scss";

import mohanImg from "../../assets/images/mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { render } from "@testing-library/react";

const Comments = ({ videoId, render, comments }) => {
  const [comment, setComment] = useState("");
  const [isCommentValid, setIsCommentValid] = useState(true);

  const orderedComments = comments.sort((a, b) => b.timestamp - a.timestamp);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!comment) {
      setIsCommentValid(false);
      return;
    }

    setIsCommentValid(true);

    const commentObj = {
      name: "Nigel",
      comment: comment,
    };

    axios
      .post(`${API_URL}/${videoId}/comments${API_KEY}`, commentObj)
      .then((response) => {
        setComment("");
        render();
      })
      .catch((error) => console.log(error));
  };

  const deleteComment = ({ id }) => {
    axios
      .delete(`${API_URL}/${videoId}/comments/${id}${API_KEY}`)
      .then((response) => {
        console.log(response);
        render();
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="comments">
      <div className="comments__container">
        <div className="comments__left">
          <img className="comments__avatar" src={mohanImg} alt="Mohan Muruge" />
        </div>
        <div className="comments__right">
          <form className="comments__form" onSubmit={handleSubmit}>
            <label className="comments__title" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <div className="comments__textarea-button-container">
              <textarea
                className="comments__textarea"
                name="comment"
                placeholder="Add a new comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required={!isCommentValid}
              ></textarea>
              <button className="comments__button" type="submit">
                <img src={addCommentIcon} alt="Comment" />
                <p className="comments__button-text">COMMENT</p>
              </button>
            </div>
          </form>
        </div>
      </div>

      {orderedComments.map(({ id, name, comment, timestamp }) => (
        <article key={id} className="comments__posts">
          <div className="comments__left">
            <div className="comments__avatar comments__avatar--no-avatar"></div>
            <img
              className="comments__delete"
              src={deleteIcon}
              alt="Delete"
              onClick={() => deleteComment({ id })}
            />
          </div>
          <div className="comments__right">
            <div className="comments__posts-container">
              <p className="comments__name">{name}</p>
              <p className="comments__date">
                {formatDistanceToNow(new Date(timestamp), {
                  locale: enCA,
                })}
              </p>
            </div>
            <p className="comments__text">{comment}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Comments;

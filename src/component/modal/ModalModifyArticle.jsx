import "../../styles/modal.css";
import { useState } from "react";
import { modifyArticle } from "../../hooks/Article";

const ModalModifyArticle = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="container">
          <h2>Modify an article</h2>
          <label>Title</label>
          <input
            placeholder={props.article.Title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <label>Content</label>
          <input
            placeholder={props.article.Content}
            onChange={(event) => setContent(event.target.value)}
          ></input>
          <div className="modalfooter-content">
            <button
              onClick={(event) => {
                modifyArticle(props.article.id, props.setRes, {
                  title,
                  content,
                });
                props.set(false);
              }}
            >
              Modify
            </button>
            <button onClick={(event) => props.set(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalModifyArticle;

import "../../styles/modal.css";
import Fetcher from "../../utils/Fetcher";
import { useState } from "react";

const ModalAddArticle = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createArticle = (title, content, set) => {
    Fetcher.post("article", {
      title: title,
      content: content,
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    set(false);
    return;
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="container">
          <h2>Add an article</h2>
          <label>Title</label>
          <input onChange={(event) => setTitle(event.target.value)}></input>
          <label>Content</label>
          <input onChange={(event) => setContent(event.target.value)}></input>
          {/* <label>Image</label>
            <input></input> */}
          <div className="modalfooter-content">
            <button
              onClick={(event) => createArticle(title, content, props.set)}
            >
              Create
            </button>
            <button onClick={(event) => props.set(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddArticle;

import "../../styles/modal.css";
import { deleteArticle } from "../../hooks/Article";

const ModalDeleteArticle = (props) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="container">
          <h2>Delete an article</h2>
          <div className="modalfooter-content">
            <button
              onClick={(event) => {
                deleteArticle(props.id);
                props.set(false);
              }}
            >
              Delete
            </button>
            <button onClick={(event) => props.set(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteArticle;

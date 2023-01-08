import { useState } from "react";
import { fetchByTag } from "../hooks/Article";

const AdminLeftSide = (props) => {
  const [tag, setTag] = useState("");
  return (
    <div className="headerLeftside">
      <div className="addArticle">
      <button
        onClick={(event) => {
          props.set(true);
        }}
      >
        Add an article
      </button>
      </div>
      <div className="tagContainer">
      <input
        type="text"
        placeholder="Search by TAG"
        onChange={(event) => setTag(event.target.value)}
        />
      <button
        onClick={() => {
          fetchByTag(tag, props.res);
        }}
        >
        Rechercher
      </button>
        </div>
    </div>
  );
};

export default AdminLeftSide;

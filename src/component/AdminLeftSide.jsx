import { useState } from "react";
import { fetchByTag } from "../hooks/Article";

const AdminLeftSide = (props) => {
  const [tag, setTag] = useState("");
  return (
    <div className="headerLeftside">
      <button
        onClick={(event) => {
          props.set(true);
        }}
      >
        Add an article
      </button>
      <input
        type="text"
        placeholder="Search by TAG"
        onChange={(event) => setTag(event.target.value)}
      />
      <button
        onClick={() => {
          console.log("ddebug", tag);
          fetchByTag(tag, props.res);
        }}
      >
        Rechercher
      </button>
    </div>
  );
};

export default AdminLeftSide;

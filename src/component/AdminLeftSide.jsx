import { useState } from "react";
import { fetchByTag } from "../hooks/Article";
import { useAuthContext } from "../hooks/useAuthContext";

const AdminLeftSide = (props) => {
  const [tag, setTag] = useState("");
  const auth = useAuthContext();

  return (
    <div className="headerLeftside">
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
        {auth.admin && (
          <button
            onClick={(event) => {
              props.set(true);
            }}
          >
            Add an article
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminLeftSide;

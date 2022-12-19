const AdminLeftSide = (props) => {
  return (
    <div className="headerLeftside">
      <button
        onClick={(event) => {
          props.set(true);
        }}
      >
        Add an article
      </button>
    </div>
  );
};

export default AdminLeftSide;

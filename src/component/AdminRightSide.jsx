const AdminRightSide = (props) => {
  return (
    <div className="headerRightside">
      <button onClick={() => props.setModify(true)}>Modify article</button>
      <button onClick={() => props.setDelete(true)}>Delete article</button>
    </div>
  );
};

export default AdminRightSide;

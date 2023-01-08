import { useAuthContext } from "../hooks/useAuthContext";

const AdminRightSide = (props) => {
  const auth = useAuthContext();

  return (
    <div className="headerRightside">
      {auth.admin && (
        <>
          <button onClick={() => props.setModify(true)}>Modify article</button>
          <button onClick={() => props.setDelete(true)}>Delete article</button>
        </>
      )}
    </div>
  );
};

export default AdminRightSide;

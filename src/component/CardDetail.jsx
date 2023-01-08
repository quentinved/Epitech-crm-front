import AdminRightSide from "./AdminRightSide";

const CardDetail = (props) => {
  return (
    <div className="containercard">
      <AdminRightSide setDelete={props.setDelete} setModify={props.setModify} />
      <div className="carddetail">
        <h2>{props.detail.title}</h2>
        <div className="containerdetail">
          <p>{props.detail.content}</p>
        </div>
        <h3>Tag: {props.detail.tag} </h3>
      </div>
    </div>
  );
};

export default CardDetail;

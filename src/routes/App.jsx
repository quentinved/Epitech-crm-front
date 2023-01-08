import "../styles/App.css";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Fetcher from "../utils/Fetcher";
import ModalAddArticle from "../component/modal/ModalAddArticle";
import ModalDeleteArticle from "../component/modal/ModalDeleteArticle";
import ModalModifyArticle from "../component/modal/ModalModifyArticle";
import AdminLeftSide from "../component/AdminLeftSide";
import CardDetail from "../component/CardDetail";
import { fetchArticles } from "../hooks/Article";

function App() {
  const auth = useAuthContext();
  let [res, setRes] = useState([]);
  let [detail, setDetail] = useState({});
  let [addArticle, setAddArticle] = useState(false);
  let [deleteArticle, setDeleteArticle] = useState(false);
  let [modifyArticle, setModifyArticle] = useState(false);
  let [idArticle, setIdarticle] = useState({});

  const changeActive = (article) => {
    Fetcher.get(`article/${article.id}`)
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
    setRes((state) => {
      return state.map((artState) => {
        if (artState.id === article.id) {
          setIdarticle(article);
          return { ...artState, active: !artState.active };
        }
        return { ...artState, active: false };
      });
    });
  };

  useEffect(() => {
    if (auth.isConnected) {
      fetchArticles(setRes);
    }
  }, [auth, addArticle, deleteArticle]);

  return (
    <>
      {addArticle && <ModalAddArticle set={setAddArticle} />}
      {deleteArticle && (
        <ModalDeleteArticle set={setDeleteArticle} id={idArticle.id} />
      )}
      {modifyArticle && (
        <ModalModifyArticle
          set={setModifyArticle}
          setRes={setRes}
          article={idArticle}
        />
      )}
      <div className="App">
        <Navbar />
        <div className="leftside">
          {auth.isConnected && <AdminLeftSide set={setAddArticle} res={setRes} />}
          {res.map((article) => {
            return (
              <div
                className={`article ${article.active ? "selected" : ""}`}
                onClick={(event) => changeActive(article)}
                key={article.id}
              >
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </div>
            );
          })}
        </div>
        <div className="rightside">
          {detail.title ? (
            <CardDetail
              detail={detail}
              setDelete={setDeleteArticle}
              setModify={setModifyArticle}
            />
          ) : (
            <p>Please select an article</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

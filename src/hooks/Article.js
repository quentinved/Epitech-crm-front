import Fetcher from "../utils/Fetcher";

export const fetchArticles = (setRes) => {
    Fetcher.get("article")
        .then((data) =>
            setRes(data.map((article) => ({ ...article, active: false })))
        )
        .catch((err) => console.log(err));
};

export const deleteArticle = (id, setRes) => {
    Fetcher.delete(`article/${id}`)
        .then((data) => fetchArticles(setRes))
        .catch((err) => console.log(err));
    return;
};

export const modifyArticle = (id, setRes, modifyArticle) => {
    Fetcher.put(`article/${id}`,
        {
            title: modifyArticle.title,
            content: modifyArticle.content,
        })
        .then((data) => fetchArticles(setRes))
        .catch((err) => console.log(err));
    return;
};
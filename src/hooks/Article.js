import Fetcher from "../utils/Fetcher";

export const fetchByTag = (tag, setRes) => {
    Fetcher.get(`article/tag?tag=${tag}`)
        .then((data) =>
            setRes(data.map((article) => ({ ...article, active: false })))
        )
        .catch((err) => setRes([]));
};

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

export const modifyArticle = (article, setRes, modifyArticle) => {
    if (modifyArticle.title === "")
        modifyArticle.title = article.title;
    if (modifyArticle.content === "")
        modifyArticle.content = article.content;
    if (modifyArticle.tag === "")
        modifyArticle.tag = article.tag;
    Fetcher.put(`article/${article.id}`,
        {
            title: modifyArticle.title,
            content: modifyArticle.content,
            tag: modifyArticle.tag,
        })
        .then((data) => fetchArticles(setRes))
        .catch((err) => console.log(err));
    return;
};

export const api = 'http://localhost:8000/api';


export const fetchArticles = (pageIndex: number, pageSize: number) => {
  return fetch(`${api}/articles?pageIndex=${pageIndex}&pageSize=${pageSize}`).then(response => response.json())
}

export const fetchArticle = () => {
  return fetch(`${api}/article`).then(response => response.json());
};

export const fetchInfo = () => {
  return fetch(`${api}/info`).then(response => response.json());
};

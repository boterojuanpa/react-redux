import superagent from 'superagent';



const API_ROOT = 'https://conduit.productionready.io/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

const requests = {
    del: url =>
      superagent.del(`${API_ROOT}${url}`).then(responseBody),
    get: url =>
      superagent.get(`${API_ROOT}${url}`).then(responseBody),
    put: (url, body) =>
      superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
    post: (url, body) =>
      superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
  };

  const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
  const omitSlug = article => Object.assign({}, article, { slug: undefined })

const Articles = {
    all: page =>
        requests.get(`/articles?${limit(10, page)}`),
    byAuthor: (author, page) =>
        requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
    byTag: (tag, page) =>
        requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
    del: slug =>
        requests.del(`/articles/${slug}`),
    favorite: slug =>
        requests.post(`/articles/${slug}/favorite`),
    favoritedBy: (author, page) =>
        requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
    feed: () =>
        requests.get('/articles/feed?limit=10&offset=0'),
    get: slug =>
        requests.get(`/articles/${slug}`),
    unfavorite: slug =>
        requests.del(`/articles/${slug}/favorite`),
    update: article =>
        requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
    create: article =>
        requests.post('/articles', { article })
};


export default {
    Articles
}
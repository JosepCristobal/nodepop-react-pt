import client from './client';

const advertsBaseUrl = '/api/v1';

export const getLatestAdverts = () => {
  const url = `${advertsBaseUrl}/adverts`;
  //?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`
  return client.get(url);
};

export const getAdvertDetail = advertId => {
  const url = `${advertsBaseUrl}/adverts/${advertId}`;
  return client.get(url);
};

export const createAdvert = advert => {
  const url = `${advertsBaseUrl}/adverts`;
  return client.post(url, advert);
};

// export const createLike = tweetId => {
//   const url = `${tweetsBaseUrl}/adverts/${tweetId}/likes`;
//   return client.post(url);
// };

// export const deleteLike = likeId => {
//   const url = `${tweetsBaseUrl}/likes/${likeId}`;
//   return client.delete(url);
// };

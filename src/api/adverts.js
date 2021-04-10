import client from './client';

const advertsBaseUrl = '/api/v1';

export const getLatestAdverts = () => {
  const url = `${advertsBaseUrl}/adverts`;
  //?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`
  return client.get(url);
};

export const getAdvertDetail = (advertId) => {
  const url = `${advertsBaseUrl}/adverts/${advertId}`;
  return client.get(url);
};

export const createAdvert = (advert) => {
  const url = `${advertsBaseUrl}/adverts`;
 
  return client.post(url, advert);
};

export const createAdvertPhoto= (advert) =>{
  const url = `${advertsBaseUrl}/adverts`;
  const formData = new FormData();
    formData.append('photo',advert.photo)
    formData.append('name',advert.name)
    formData.append('sale',advert.sale)
    formData.append('price',advert.price)
    formData.append('tags',advert.tags)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  client.post(url,formData,config)
  };

  export const deleteAdvert = (advertId) => {
    const url = `${advertsBaseUrl}/adverts/${advertId}`;
    return client.delete(url);
  }

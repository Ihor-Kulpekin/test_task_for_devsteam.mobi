import { CLIENT_ID, UNSPLASH_API } from '@env';

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const getPhotos = async () => {
  const url = `${UNSPLASH_API}/photos/?client_id=${CLIENT_ID}`;
  return await getData(url);
};

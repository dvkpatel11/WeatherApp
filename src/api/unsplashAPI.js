import axios from 'axios';

const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZSfC9VXm7tw03OGthHqapogQUAALoqcRNUcvYMGXScY',
  },
});

export const getWeatherImage = async (query) => {
  try {
    const response = await unsplashAPI.get('/search/photos', {
      params: {
        query,
        orientation: 'landscape',
        per_page: 1,
        content_filter: 'high',
      },
    });

    if (response.data.results.length > 0) {
      return response.data.results[0].urls.raw;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default unsplashAPI;
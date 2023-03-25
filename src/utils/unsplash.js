import unsplashAPI from '../api/unsplashAPI';

const getRandomNaturalBeautyPhoto = async () => {
  try {
    const response = await unsplashAPI.get('/photos/random', {
      params: {
        query: 'natural beauty',
        orientation: 'landscape',
        content_filter: 'high',
        featured: true,
      },
    });
    return response.data.urls.regular;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getRandomNaturalBeautyPhoto;

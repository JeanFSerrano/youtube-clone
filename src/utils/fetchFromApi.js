import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const apiKey = import.meta.env.REACT_APP_RAPID_API_KEY

export const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '40dc37db0amshc4c5b6e66e95ce1p1236d9jsn56bf383fb510',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
};

export default fetchFromApi
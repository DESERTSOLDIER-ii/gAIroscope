import axios from 'axios';

export const appSearch = async (query) => {
  try {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}`;
    const { data } = await axios.get(url);

    const results = data.items?.map((item) => ({
      title: item.title,
      snippet: item.snippet,
      link: item.link
    }));

    return results || [];
  } catch (err) {
    console.error('Search error:', err.message);
    return [];
  }
};

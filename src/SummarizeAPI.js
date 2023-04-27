import axios from "axios";

const baseUrl = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize'

export const summarizeAPI = async (url) => {
    const options = {
        params: {
          url,
          length: '3'
        },
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': 'bca5e9e8c1msh640812af376c7e5p141115jsn9db9b5d94550',
          'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
    };
    const { data } = await axios.get(`${baseUrl}`, options);

    return data;
}
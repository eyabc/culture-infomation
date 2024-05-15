import axios from "axios";


export const fetchAll = async () => {
  return axios.get(
      `https://api.github.com/repos/eyabc/culture-infomation/contents/fetchResult.json`,
      {
        headers: {
          'Authorization':
              `Bearer ${"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"}`,
          Accept: 'application/vnd.github+json',
          "X-GitHub-Api-Version": "2022-11-28"
        },
      })
  .then((response) => {
    return JSON.parse(decodeURIComponent(escape(atob(response.data.content))));
  })
};

export default {
  fetchAll
}
import axios from "axios";


export const fetchAll = async () => {
  return axios.get(
      `https://api.github.com/repos/eyabc/culture-infomation/contents/fetchResult.json`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          "X-GitHub-Api-Version": "2022-11-28"
        }
      })
  .then((response) => {
    return atob(response.data.content);
  })
};

export default {
  fetchAll
}
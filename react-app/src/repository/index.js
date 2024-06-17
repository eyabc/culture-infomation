import axios from "axios";


export const fetchAll = async () => {
  return axios.get(
      `https://api.github.com/repos/eyabc/culture-infomation/contents/fetchResult.json`,
      {

      })
  .then((response) => {
    return JSON.parse(decodeURIComponent(escape(atob(response.data.content))));
  })
};

export default {
  fetchAll
}
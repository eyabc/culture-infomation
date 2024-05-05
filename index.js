const axios = require('axios');
const fs = require("fs");

const regex = /<img[^>]+src="([^"]+)"/;

const allList = [];
// 한예종 공연 정보 크롤링
const list = [
  {
    idEn: "karts",
    idKo: "한국 예술 종합학교",
    url: "https://www.karts.ac.kr/usr/shw/exh/selectUsrShowList.do",
    node: {
      list: (data) => data.resultList.map(item => ({
        idEn: "karts",
        idKo: "한국 예술 종합학교",
        id: item.exNo,
        title: item.title,
        place: item.placeCd,
        imageTag: (() => {
          const match = regex.exec(item.exContent);
          return (!!match && match.length > 1) ? ("https://www.karts.ac.kr"
              + match[1]) : "";
        })(),
        startDate: item.exStdt,
        endDate: item.exEddt,
      })),
    }
  },
  {
    idEn: "karts_dance",
    idKo: "한예종 무용원 공연",
    url: "https://www.instagram.com/knua_schoolofdance/",
  }
];

const fetchAPI = async (api) => {
  if (api?.node) {
    const {data} = await axios.get(api.url);
    return api.node.list(data);
  }

  return [];
}

const fetchAPIAndSaveResult = async () => {
  for (const item of list) {
    const items = await fetchAPI(item);
    if (items.length > 0) {
      allList.push(items);
    }
  }

  gitWrite("fetchResult.json", JSON.stringify(allList.flat()));
}

const fetchAllUriAndSaveResult = () => {
  gitWrite("fetchUrls.json", JSON.stringify(list.map(item => ({
    idEn: item.idEn,
    idKo: item.idKo,
    url: item.url
  })).flat()));
}

const token = process.env.GITHUB_TOKEN;
const gitWrite = (name, content) => {
  axios.put(
      `https://api.github.com/repos/eyabc/culture-infomation/contents/${name}`,
      {
        message: Date.now(),
        committer: {
          name: "eyabc",
          email: "bey4314@naver.com"
        },
        content
      },
      {
        headers: {
          'Authorization':
              `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          "X-GitHub-Api-Version": "2022-11-28"
        }
      })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

}

const main = async () => {

  await fetchAPIAndSaveResult();
  fetchAllUriAndSaveResult();

};

main();
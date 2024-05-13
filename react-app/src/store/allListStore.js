import create from 'zustand';

const allListStore = create((set) => ({
  list: [
    {
      "idEn": "karts",
      "idKo": "한국 예술 종합학교",
      "id": "3525",
      "title": "2024 크누아 피아니스트 시리즈 – 김재희 피아노 독주회",
      "place": "이강숙홀",
      "imageTag": "https://www.karts.ac.kr/cmm/filedownload.do?fileId=1270d972-5ac7-4fc0-b8c1-7e7972febd9f.png",
      "startDate": "2024-05-02",
      "endDate": "2024-05-02"
    }
  ],

  fetchList: () =>
      set((list) => {
        return {
          list
        }
      }),


}))
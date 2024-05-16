import React, {useEffect} from "react";
import allListStore from "../../store/allListStore.js";

function Pc() {
  const { list, fetchList } = allListStore();

  useEffect(() => {
    fetchList();
  }, [])

  return (
      <div>
        {list.map((item) => (
            <div key={item.id}>
              <p>{item.idEn}</p>
              <p>{item.id}</p>
              <p>{item.idKo}</p>
              <p>{item.title}</p>
              <p>{item.place}</p>
              <p>{item.imageTag}</p>
              <p>{item.startDate}</p>
              <p>{item.endDate}</p>
            </div>
        ))}


       </div>
  )
}

export default Pc;

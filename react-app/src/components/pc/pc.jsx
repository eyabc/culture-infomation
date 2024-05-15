// @ts-ignore
import React, {useEffect} from "react";
import allListStore from "../../store/allListStore.js";


function Pc() {
  const { list, fetchList } = allListStore();

  useEffect(() => {
    fetchList().then(r => {
      console.log(r)
    });
  }, [])
  return (
      <div> pc
      </div>
  );
}

export default Pc;

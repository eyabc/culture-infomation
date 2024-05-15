import React, {useEffect} from "react";
import allListStore from "../../store/allListStore.js";

function Pc() {
  const { list, fetchList } = allListStore();

  console.log("Pc rendered")
  useEffect(() => {
    fetchList().then(r => {
      console.log(r)
    });
  }, [])
  return (
      <div> {{list}}
      </div>
  );
}

export default Pc;

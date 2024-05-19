import React, {useEffect} from "react";
import allListStore from "../../../store/allListStore";
import SpacingGrid from "../../common/SpacingGrid";

function LayoutContent() {
  const { list, fetchList } = allListStore();

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div id={'layout-content'}>
      <SpacingGrid list={list}/>

    </div>
  );
}

export default LayoutContent;
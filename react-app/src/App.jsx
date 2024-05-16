import React from "react"
import { useMediaQuery } from "react-responsive"
import Pc from "./components/pc/pc.jsx";

function App() {

  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  console.dir({isPc, isMobile, isTablet});

  return (
    <div className="App">
      <Pc />
    </div>
  );
}

export default App;

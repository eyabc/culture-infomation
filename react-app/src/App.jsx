import React from "react"
import { useMediaQuery } from "react-responsive"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./router/Home";
import SnsContent from "./router/SnsContent";

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

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sns" element={<SnsContent />} />
          {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

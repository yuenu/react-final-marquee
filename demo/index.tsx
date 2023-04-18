import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Marquee from "../src";
import "./styles.css";

const App = () => {
  const [paused, setPaused] = useState(false)
  return (
    <div className="container">
      <button onClick={() => setPaused((prev) => !prev)}>Paused</button>
      <Marquee className="cmar" paused={paused}>???1?????</Marquee>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

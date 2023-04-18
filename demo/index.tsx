import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const App = () => {
  return <div>marquee</div>;
};

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

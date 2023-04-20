import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Marquee from "../src";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1>React final marquee</h1>
        <a
          href="https://github.com/yuenu/react-final-marquee"
          className="github-link"
          target="_blank"
        >
          Github
        </a>
      </div>
    </header>
  );
};

const Demo = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="demo">
      <div>
        <h3 className="demo-title default">Default settings</h3>
        {/* <button onClick={() => setPaused((prev) => !prev)}>Paused</button> */}
        <Marquee>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Marquee>
      </div>
      <hr />
      <div>
        <h3 className="demo-title">pauseOnHover: false</h3>
        <Marquee pauseOnHover={false}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Marquee>
      </div>
      <hr />
      <div>
        <h3 className="demo-title">duration: 10</h3>
        <Marquee duration={10}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Marquee>
      </div>
      <hr />
      <div>
        <h3 className="demo-title">sapce: 20</h3>
        <Marquee space={20}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Marquee>
      </div>
      <hr />
      <div>
        <h3 className="demo-title">Default settings - Short text</h3>
        <Marquee space={20}>
          Lorem Ipsum
        </Marquee>
      </div>
      <hr />
      <div>
        <h3 className="demo-title">repeat: 5 - Short text</h3>
        <Marquee repeat={5}>
          Lorem Ipsum
        </Marquee>
      </div>
      <hr />
      <div>
        <h3 className="demo-title">repeat: 12 - Short text</h3>
        <Marquee repeat={12}>
          Lorem Ipsum
        </Marquee>
      </div>
      
    </section>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Demo</h2>
        <Demo />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ReactFinalMarquee from "../src";
import { demoCode1, demoCode2, demoCode3 } from "./data";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h2>React final marquee</h2>
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

type TagType = {
  children?: React.ReactNode;
};

const Tag = ({ children }: TagType) => {
  return (
    <div className="tag-container">
      <div className="tag-start">START~</div>
      <div>{children}</div>
      <div className="tag-end">~END</div>
    </div>
  );
};

const Demo1 = () => {
  return (
    <section className="normal">
      <div>
        <h4 className="demo-title default">Default settings - Horizontal</h4>
        <div
          style={{
            backgroundColor: "#E9E2DC",
            height: "40px",
            border: "1px solid #780000",
            lineHeight: "40px",
          }}
        >
          <ReactFinalMarquee>
            <Tag>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Tag>
          </ReactFinalMarquee>
        </div>
        <details>
          <summary>Code</summary>
          <pre>
            <code>{demoCode1}</code>
          </pre>
        </details>
      </div>
    </section>
  );
};

const Demo2 = () => {
  return (
    <section className="normal">
      <div>
        <h4 className="demo-title default">Vertical marquee</h4>
        <div
          style={{
            backgroundColor: "#E9E2DC",
            height: "200px",
            border: "1px solid #780000",
          }}
        >
          <ReactFinalMarquee
            direction="topToBottom"
            position="center"
            space="1rem"
            repeat="7"
            speed="50"
          >
            <Tag>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Tag>
          </ReactFinalMarquee>
        </div>
        <details>
          <summary>Code</summary>
          <pre>
            <code>{demoCode2}</code>
          </pre>
        </details>
      </div>
    </section>
  );
};

const Demo3 = () => {
  return (
    <section className="image">
      <div>
        <h4 className="demo-title default">With Image2</h4>
        <div
          style={{
            backgroundColor: "#E9E2DC",
            height: "200px",
            border: "1px solid #780000",
            lineHeight: "40px",
          }}
        >
          <ReactFinalMarquee space="5rem" height="100%" speed="12">
            <div style={{ display: "flex", gap: "5rem", height: "100%" }}>
              <img src="./images/img1.webp" alt="" />
              <img src="./images/img2.webp" alt="" />
              <img src="./images/img3.webp" alt="" />
              <img src="./images/img4.webp" alt="" />
              <img src="./images/img5.webp" alt="" />
              <img src="./images/img6.webp" alt="" />
            </div>
          </ReactFinalMarquee>
        </div>
        <details>
          <summary>Code</summary>
          <pre>
            <code>{demoCode3}</code>
          </pre>
        </details>
      </div>
    </section>
  );
};

const CustomerControl = () => {
  const [height, setHeight] = useState("30px");
  const [paused, setPaused] = useState(false);
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [direction, setDirection] = useState<
    "rightToLeft" | "leftToRight" | "bottomToTop" | "topToBottom"
  >("rightToLeft");
  const [speed, setSpeed] = useState<number | string>(20);
  const [space, setSpace] = useState<number | string>(0);
  const [repeat, setRepeat] = useState<number | string>(2);
  const [text, setText] = useState("This is short test message");
  const [bgColor, setBgColor] = useState("#eee");
  const [textColor, setTextColor] = useState("#333");
  const [position, setPosition] = useState<"start" | "center" | "end">("start");

  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setIsChange(true);
    setTimeout(() => {
      setIsChange(false);
    }, 0);
  }, [speed, space, repeat, text]);

  return (
    <section className="control normal">
      <div className="control-items">
        <label>
          Height :
          <input
            type="text"
            name="height"
            onChange={(e) => setHeight(e.target.value)}
            defaultValue={height}
          />
        </label>
        <label>
          Paused (default: false): {String(paused)}
          <button
            className={paused ? "active" : ""}
            onClick={() => setPaused((prev) => !prev)}
          >
            Paused
          </button>
        </label>
        <label>
          PauseOnHover (default: false): {String(pauseOnHover)}
          <button
            className={pauseOnHover ? "active" : ""}
            onClick={() => setPauseOnHover((prev) => !prev)}
          >
            ture
          </button>
        </label>
        <label>
          Direction (default: "rightToLeft"): {direction}
          {["rightToLeft", "leftToRight", "bottomToTop", "topToBottom"].map(
            (item) => (
              <button
                key={item}
                className={direction === item ? "active" : ""}
                onClick={() =>
                  setDirection(
                    item as
                      | "rightToLeft"
                      | "leftToRight"
                      | "bottomToTop"
                      | "topToBottom"
                  )
                }
              >
                {item}
              </button>
            )
          )}
        </label>
        <label>
          Speed (default: 20) : {String(speed)}
          <input
            type="number"
            name="speed"
            onChange={(e) => setSpeed(e.target.value)}
            defaultValue={speed}
            min="0"
          />
        </label>
        <label>
          Space (default: 0) : {String(space)}
          <input
            type="number"
            name="space"
            onChange={(e) => setSpace(e.target.value)}
            defaultValue={space}
            min="0"
          />
        </label>
        <label>
          Repeat (default: 2) : {String(repeat)}
          <input
            type="number"
            name="repeat"
            onChange={(e) => setRepeat(e.target.value)}
            defaultValue={repeat}
            min="0"
          />
        </label>
        <label>
          Input text :
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={text}
          />
        </label>
        <label>
          Background color : {String(bgColor)}
          <input
            type="text"
            name="text"
            onChange={(e) => setBgColor(e.target.value)}
            defaultValue={bgColor}
          />
        </label>
        <label>
          Text color : {String(textColor)}
          <input
            type="text"
            name="text"
            onChange={(e) => setTextColor(e.target.value)}
            defaultValue={textColor}
          />
        </label>
        <label>
          Position (default: 'top'): {String(position)}
          {["start", "center", "end"].map((item) => (
            <button
              key={item}
              className={position === item ? "active" : ""}
              onClick={() => setPosition(item as "start" | "center" | "end")}
            >
              {item}
            </button>
          ))}
        </label>
      </div>
      <div className="showcase">
        {isChange ? null : (
          <ReactFinalMarquee
            height={height}
            paused={paused}
            pauseOnHover={pauseOnHover}
            direction={direction}
            speed={speed}
            space={space}
            repeat={repeat}
            bgColor={bgColor}
            textColor={textColor}
            position={position}
          >
            <Tag>{text}</Tag>
          </ReactFinalMarquee>
        )}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h3>Demo</h3>
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <h3>Customer Contorl</h3>
        <CustomerControl />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

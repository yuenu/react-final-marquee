export const demoCode1 = `
import ReactFinalMarquee from "react-final-marquee";

const Tag = ({ children }: TagType) => {
  return (
    <div className="tag-container">
      <div className="tag-start">START~</div>
      <div>{children}</div>
      <div className="tag-end">~END</div>
    </div>
  );
};

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#E9E2DC",
        height: "40px",
        border: "1px solid #780000",
        borderRadius: "5px",
        lineHeight: "40px",
      }}
    >
      <ReactFinalMarquee height="100%">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s,
      </ReactFinalMarquee>
    </div>
  )
}
`;

export const demoCode2 = `
import ReactFinalMarquee from "react-final-marquee";

const Tag = ({ children }: TagType) => {
  return (
    <div className="tag-container">
      <div className="tag-start">START~</div>
      <div>{children}</div>
      <div className="tag-end">~END</div>
    </div>
  );
};

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#E9E2DC",
        height: "300px",
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
  )
}
`;

export const demoCode3 = `
import ReactFinalMarquee from "react-final-marquee";

<div>
<h4 className="demo-title default">With Image</h4>
<div
  style={{
    backgroundColor: "#E9E2DC",
    height: "200px",
    border: "1px solid #780000",
    lineHeight: "40px",
  }}
>
  <ReactFinalMarquee space="5rem" height="100%" speed="12">
    <div style={{ display: "flex", gap: '5rem', height: '100%' }}>
      <img src="./images/img1.webp" alt="" />
      <img src="./images/img2.webp" alt="" />
      <img src="./images/img3.webp" alt="" />
      <img src="./images/img4.webp" alt="" />
      <img src="./images/img5.webp" alt="" />
      <img src="./images/img6.webp" alt="" />
    </div>
  </ReactFinalMarquee>
</div>
`;

export const demoCode4 = `
<div>
<h4 className="demo-title default">
  Aysnc Data{" "}
  <button
    className={"fetch-btn" + isLoading ? 'loading' : '' "}
    type="button"
    onClick={() => {
      setIsLoading(true);
      setFakeData("");
      fetchData().then((res) => {
        setFakeData(res as string);
        setIsLoading(false);
      });
    }}
  >
    Fetch Data
  </button>
</h4>
<div
  style={{
    backgroundColor: "#E9E2DC",
    height: "40px",
    border: "1px solid #780000",
    lineHeight: "40px",
  }}
>
  <ReactFinalMarquee space="0.4rem">
    {fakeData ? <Tag>{fakeData}</Tag> : null}
  </ReactFinalMarquee>
</div>
`;

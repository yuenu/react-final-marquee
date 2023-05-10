# React final marquee

Easy way to use marquee for react

[![size](https://img.shields.io/bundlephobia/minzip/react-final-marquee.svg)](https://github.com/yuenu/react-final-marquee)
[![dm](https://img.shields.io/npm/dm/react-final-marquee.svg)](https://github.com/yuenu/react-final-marquee)
![visitor badge](https://visitor-badge.glitch.me/badge?page_id=yuenu.react-final-marquee)

## Installation

```bash
npm install react-final-marquee
# or
yarn add react-final-marquee

```

## Demo

[See Here](https://yuenu.github.io/react-final-marquee/)

## Usage

```js
// App.js
import ReactFinalMarquee from "react-final-marquee";

const VertialMarquee = () => {
  return (
    <div className="App">
      <ReactFinalMarquee
        className="marquee-customer-class"
        direction="toRight"
        speed="30"
        space="20px"
        repeat="5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </ReactFinalMarquee>
    </div>
  );
};

const HorizontalMqrquee = () => {
  return (
    <div className="App">
      <ReactFinalMarquee
        className="marquee-customer-class"
        direction="toBottom"
        speed="30"
        space="20px"
        repeat="5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </ReactFinalMarquee>
    </div>
  );
};
```

## Props

| Prop         | Type                                        | Default  | Description                                                       |
| ------------ | ------------------------------------------- | -------- | ----------------------------------------------------------------- |
| height       | `Number` / `String`                         | `30px`   | The height of the container div                                   |
| style        | `CSSProperties`                             | `{}`     | Inline style for the container div                                |
| className    | `String`                                    | `""`     | Class name to style the container div                             |
| paused       | `Boolean`                                   | `false`  | The property specifies whether the animation is running or paused |
| pauseOnHover | `Boolean`                                   | `true`   | Whether to pause the marquee when hovered                         |
| direction    | `toRight` / `toLeft` / `toBottom` / `toTop` | `toLeft` | The direction the marquee is sliding                              |
| duration     | `Number` / `String`                         | `10`     | Time to complete a marquee                                        |
| space        | `Number` / `String`                         | `0`      | Each loop item sapces                                             |
| repeat       | `Number` / `String`                         | `2`      | Number of repeat text                                             |
| textColor    | `String` / `null`                           | `null`   | Text color                                                        |
| bgColor      | `String` /`null`                            | `null`   | Container Background color                                        |
| position     | `start` /`center` / `end`                   | `start`  | Marquee position                                                  |

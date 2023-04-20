# React final marquee

Easy way to use marquee text for react

## Installation

```bash
npm install react-final-marquee
# or
yarn add react-final-marquee

```

## Demo

[Here](https://yuenu.github.io/react-final-marquee/)

## Continued development

- [ ] Vertical marquee
- [ ] Add test case
- [ ] It can maintain the same speed regardless of the width.
- [ ] Stay at the same speed even when you resize the window

## Usage

```js
import Marquee from "react-final-marquee";

<div>
  <Marquee>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </Marquee>
</div>;
```

## Props

| Prop         | Type             | Default                        | Description                                                       |
| ------------ | ---------------- | ------------------------------ | ----------------------------------------------------------------- |
| height       | Number or String | 15                             | The height of the container div                                   |
| style        | CSSProperties    | 15                             | Animation Duration                                                |
| className    | String           | ""                             | Class name to style the container div                             |
| paused       | Boolean          | false                          | The property specifies whether the animation is running or paused |
| pauseOnHover | Boolean          | false                          | Whether to pause the marquee when hovered                         |
| direction    | String           | "leftToRight" or "rightToLeft" | The direction the marquee is sliding                              |
| duration     | Number           | 0                              | Animation Duration                                                |
| space        | Number           | 0                              | Each loop item sapces                                             |
| repeat       | Number           | 2                              | Number of repeat text                                             |
| textColor    | String or null   | null                           | Text color                                                        |
| bgColor      | String or null   | null                           | Container Background color                                        |

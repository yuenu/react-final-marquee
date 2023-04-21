# React final marquee

Easy way to use marquee text for react

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

## Continued development

- [ ] Vertical marquee
- [ ] Add test case
- [ ] Stay at the same speed even when you resize the window

## Usage

```js
import Marquee from "react-final-marquee";

<div>
  <Marquee>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </Marquee>
</div>
```

## Props

| Prop         | Type                          | Default       | Description                                                       |
| ------------ | ----------------------------- | ------------- | ----------------------------------------------------------------- |
| height       | `Number` / `String`           | `30px`        | The height of the container div                                   |
| style        | `CSSProperties`               | `{}`          | Inline style for the container div                                |
| className    | `String`                      | `""`          | Class name to style the container div                             |
| paused       | `Boolean`                     | `false`       | The property specifies whether the animation is running or paused |
| pauseOnHover | `Boolean`                     | `true`        | Whether to pause the marquee when hovered                         |
| direction    | `leftToRight` / `rightToLeft` | `rightToLeft` | The direction the marquee is sliding                              |
| seeed        | `Number` / `String`           | `20`          | Speed calculated as pixels/second                                 |
| space        | `Number` / `String`           | `0`           | Each loop item sapces                                             |
| repeat       | `Number` / `String`           | `2`           | Number of repeat text                                             |
| textColor    | `String` / `null`             | `null`        | Text color                                                        |
| bgColor      | `String` /`null`              | `null`        | Container Background color                                        |
| position     | `top` /`center` / `bottom`    | `top`         | Marquee position                                                  |

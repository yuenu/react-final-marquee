import React, { useRef, forwardRef } from "react";
import { isNumeric, assignRef } from "./utils";
import type { MarqueeProps } from "./utils";
import "./style.css";

const Marquee = forwardRef<HTMLElement, MarqueeProps>((_props, _ref) => {
  const {
    height = "30px",
    style = {},
    className = "",
    paused = false,
    pauseOnHover = true,
    direction = "toLeft",
    duration = 20,
    space = 0,
    repeat = 2,
    textColor = null,
    bgColor = null,
    position = "start",
    children,
    ...rest
  } = _props;

  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerStyles: React.CSSProperties = {
    ["--marquee-container-height" as string]: isNumeric(height)
      ? `${height}px`
      : height,
    ["--marquee-text-color" as string]: textColor,
    ["--marquee-background-color" as string]: bgColor,
  };

  const itemStyles: React.CSSProperties = {
    ["--play" as string]: paused ? "paused" : "running",
    ["--duration" as string]: isNumeric(duration) ? `${duration}s` : duration,
    ["--space" as string]: isNumeric(space) ? `${space}px` : space,
    ["--pause-on-hover" as string]: paused
      ? "paused"
      : pauseOnHover
      ? "paused"
      : "running",
    ...style,
  };

  return (
    <div
      className={`${className} react-final-marquee`}
      ref={(element) => {
        assignRef(containerRef, element);
        assignRef(_ref, element);
      }}
      style={containerStyles}
      {...rest}
    >
      <div
        className="react-final-marquee-wrapper"
        data-direction={direction}
        data-position={position}
      >
        {Array.from({ length: +repeat }, (_, i) => i).map((item) => (
          <div
            key={item}
            className="react-final-marquee-item"
            ref={marqueeRef}
            style={itemStyles}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Marquee;

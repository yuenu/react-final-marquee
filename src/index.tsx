import React, { useState, useRef, useEffect, forwardRef } from "react";
import { useElementSize, isNumeric, assignRef } from "./utils";
import type { MarqueeProps } from "./utils";
import "./style.css";

const Marquee = forwardRef<HTMLElement, MarqueeProps>((_props, _ref) => {
  const {
    height = "30px",
    style = {},
    className = "",
    paused = false,
    pauseOnHover = true,
    direction = "rightToLeft",
    speed = 20,
    space = 0,
    repeat = 2,
    textColor = null,
    bgColor = null,
    position = "start",
    children,
  } = _props;
  const [duration, setDuration] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } =
    useElementSize(containerRef);
  const { width: marqueeWidth, height: marqueeHeight } =
    useElementSize(marqueeRef);

  useEffect(() => {
    const isVertical = ["topToBottom", "bottomToTop"].includes(direction);
    const nubmerSpeed = +speed;

    if (isVertical) {
      if (marqueeHeight !== undefined && containerHeight !== undefined) {
        setDuration(
          (marqueeHeight < containerHeight
            ? containerHeight / nubmerSpeed
            : marqueeHeight / nubmerSpeed) * 0.2
        );
      }
      return;
    }

    if (marqueeWidth !== undefined && containerWidth !== undefined) {
      setDuration(
        (marqueeWidth < containerWidth
          ? containerWidth / nubmerSpeed
          : marqueeWidth / nubmerSpeed) * 0.2
      );
    }
  }, [marqueeWidth, containerWidth]);

  const containerStyles: React.CSSProperties = {
    ["--marquee-container-height" as string]: isNumeric(height)
      ? `${height}px`
      : height,
    ["--marquee-text-color" as string]: textColor,
    ["--marquee-background-color" as string]: bgColor,
  };

  const itemStyles: React.CSSProperties = {
    ["--play" as string]: paused ? "paused" : "running",
    ["--duration" as string]: `${duration}s`,
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

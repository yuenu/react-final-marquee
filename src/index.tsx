import React, { useState, useRef, useEffect } from "react";
import { useElementSize, isNumeric } from "./utils";
import "./style.css";
interface MarqueeProps {
  /**
   * The height of the container div
   * Type: number | string
   * Default: '30px'
   */
  height?: number | string;
  /**
   * Inline style for the container div
   * Type: object
   * Default: {}
   */
  style?: React.CSSProperties;
  /**
   * Class name to style the container div
   * Type: string
   * Default: ""
   */
  className?: string;
  /**
   * Whether to play or pause the marquee
   * Type: boolean
   * Default: false
   */
  paused?: boolean;
  /**
   * Whether to pause the marquee when hovered
   * Type: boolean
   * Default: true
   */
  pauseOnHover?: boolean;
  /**
   * The direction the marquee is sliding
   * Type: "leftToRight" | "rightToLeft" | "topToBottom" | "bottomToTop"
   * Default: "rightToLeft"
   */
  direction?: "leftToRight" | "rightToLeft" | "topToBottom" | "bottomToTop";
  /**
   * Animation Duration
   * Type: number
   * Default: 20
   */
  speed?: number | string;
  /**
   * Each loop item sapces
   * Type: number
   * Default: 0
   */
  space?: number | string;
  /**
   * Number of repeat text
   * Type: number
   * Default: 2
   */
  repeat?: number | string;
  /**
   * Text color
   * Type: string
   * Default: null
   */
  textColor?: string | null;
  /**
   * Container Background color
   * Type: string
   * Default: null
   */
  bgColor?: string | null;
  /**
   * Container Background color
   * Type: "start" | "center" | "end"
   * Default: "top"
   */
  position?: "start" | "center" | "end";
  children?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
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
}) => {
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
      ref={containerRef}
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
};

export default Marquee;

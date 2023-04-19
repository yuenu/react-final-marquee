import React, { useRef } from "react";
import "./style.css";
interface MarqueeProps {
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
   * Default: false
   */
  pauseOnHover?: boolean;
  /**
   * The direction the marquee is sliding
   * Type: "leftToRight" or "rightToLeft" or "topToBottom" or "bottomToTop"
   * Default: "leftToRight"
   */
  direction?: "leftToRight" | "rightToLeft";
  /**
   * Animation Duration
   * Type: number
   * Default: 20
   */
  duration?: number;
  /**
   * Each loop item sapces
   * Type: number
   * Default: 0
   */
  space?: number;
  repeat?: number;
  children?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  style = {},
  className = "",
  paused = false,
  pauseOnHover = true,
  direction = "leftToRight",
  duration = 2,
  space = 20,
  repeat = 2,
  children,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeItemRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (marqueeItemRef.current && marqueeRef.current) {
  //     const itemWidth = marqueeItemRef.current.getClientRects()[0].width;
  //     const parentWidth = marqueeRef.current.getClientRects()[0].width;
  //   }
  // }, []);

  const itemStyles: React.CSSProperties = {
    ["--play" as string]: paused ? "paused" : "running",
    ["--duration" as string]: `${duration}s`,
    ["--space" as string]: `${space}px`,
    ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
    ...style,
  };
  return (
    <div className={`${className} react-final-marquee`} ref={marqueeRef}>
      <div className="react-final-marquee-wrapper" data-direction={direction}>
        {Array.from({ length: repeat }, (_, i) => i).map((item) => (
          <div
            key={item}
            className="react-final-marquee-item"
            ref={marqueeItemRef}
            style={{ ...itemStyles }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

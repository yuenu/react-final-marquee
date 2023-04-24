import type { ComponentProps, ElementType } from "react";

export type ElementProps<E extends ElementType = ElementType, P = {}> = Omit<
  ComponentProps<E>,
  keyof P
> &
  P;

export type EP<E extends ElementType = ElementType, P = {}> = ElementProps<
  E,
  P
>;

export type MarqueeProps = EP<
  "div",
  {
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
>;

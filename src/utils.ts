import React, { useEffect, useRef, useState } from "react";


export function useResize(callback: () => void): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const onResize = () => {
      if (typeof callbackRef.current === "function") {
        callbackRef.current();
      }
    };

    requestAnimationFrame(onResize);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
}

export function useElementSize(element: React.RefObject<HTMLDivElement>): {
  width: number | undefined;
  height: number | undefined;
} {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useResize(() => {
    setWidth((previousWidth) => {
      const nextWidth = element.current?.getBoundingClientRect().width;
      return previousWidth !== nextWidth ? nextWidth : previousWidth;
    });
    setHeight((previousHeight) => {
      const nextHeight = element.current?.getBoundingClientRect().height;
      return previousHeight !== nextHeight ? nextHeight : previousHeight;
    });
  });

  return { width, height };
}

// export function getTextWidth(text: string, font?: string) {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d") as CanvasRenderingContext2D;
//   context.font = font || getComputedStyle(document.body).font;
//   return context.measureText(text).width;
// }

// export function parseHTMLText(htmlString: string) {
//   let text = "";
//   const resultHtml = new DOMParser().parseFromString(htmlString, "text/html");
//   // resultHtml.querySelectorAll('body *').forEach((node) => {
//   //   if(node.childNodes.length < 2) text += node.innerText;
//   // });
//   text = resultHtml.body.innerText;
//   const textWidth = getTextWidth(text);
//   return { text, textWidth };
// }

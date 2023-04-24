import type { ForwardedRef } from "react";

export function assignRef<T>(
  ref: ForwardedRef<T>,
  value: T | null
): ForwardedRef<T> {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

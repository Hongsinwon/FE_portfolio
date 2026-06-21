"use client";

import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

export function toggleThemeWithTransition(
  setTheme: ReturnType<typeof useTheme>["setTheme"],
  nextTheme: "light" | "dark",
) {
  if (typeof document.startViewTransition === "function") {
    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });
    return;
  }

  setTheme(nextTheme);
}

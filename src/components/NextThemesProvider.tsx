"use client";

import { ThemeProvider, type ThemeProviderProps } from "next-themes";

type NextThemesProviderProps = ThemeProviderProps;

export default function NextThemesProvider({
  children,
  ...props
}: NextThemesProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}

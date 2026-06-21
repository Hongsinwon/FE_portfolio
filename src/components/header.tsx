"use client";

import htmlIcon from "../../public/skill/html5.webp";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import layoutStyle from "../app/layout.module.css";
import style from "./header.module.css";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header>
      <div className={layoutStyle.headerBody}>
        <h1>
          <Image src={htmlIcon} alt="html5" width={30} />
          <Link href={"/"}>SINWON FE Portfolio</Link>
        </h1>
        <button
          type="button"
          role="switch"
          aria-checked={isDark}
          aria-label="다크 모드 전환"
          className={`${style.themeSwitch} ${isDark ? style.themeSwitchOn : ""}`}
          onClick={toggleTheme}
        >
          <span className={style.themeSwitchThumb} />
          <span
            className={`${style.themeSwitchIcon} ${style.themeSwitchIconSun}`}
            aria-hidden="true"
          >
            ☀️
          </span>
          <span
            className={`${style.themeSwitchIcon} ${style.themeSwitchIconMoon}`}
            aria-hidden="true"
          >
            🌙
          </span>
        </button>
      </div>
    </header>
  );
}

"use client";

import mainIcon from "../../public/thumbnail/icon.png";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import layoutStyle from "../app/layout.module.css";
import { toggleThemeWithTransition } from "../lib/themeTransition";
import style from "./header.module.css";

const THUMB_OFFSET = 33;
const SLIDE_DURATION = 350;

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const thumbRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !thumbRef.current) return;

    const isDark = resolvedTheme === "dark";
    setIsChecked(isDark);
    thumbRef.current.style.transform = `translateX(${isDark ? THUMB_OFFSET : 0}px)`;
  }, [mounted, resolvedTheme]);

  const toggleTheme = () => {
    const nextChecked = !isChecked;
    const thumb = thumbRef.current;

    if (thumb) {
      thumb.animate(
        [
          { transform: `translateX(${isChecked ? THUMB_OFFSET : 0}px)` },
          { transform: `translateX(${nextChecked ? THUMB_OFFSET : 0}px)` },
        ],
        {
          duration: SLIDE_DURATION,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          fill: "forwards",
        },
      );
    }

    setIsChecked(nextChecked);
    toggleThemeWithTransition(setTheme, nextChecked ? "dark" : "light");
  };

  return (
    <header>
      <div className={layoutStyle.headerBody}>
        <h1>
          <Image src={mainIcon} alt="html5" width={30} />
          <Link href={"/"}>SINWON FE Portfolio</Link>
        </h1>
        <button
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-label="다크 모드 전환"
          disabled={!mounted}
          className={`${style.themeSwitch} ${isChecked ? style.themeSwitchOn : ""}`}
          onClick={toggleTheme}
        >
          <span className={style.themeSwitchTrack}>
            <span
              className={`${style.themeSwitchIcon} ${style.themeSwitchIconSun}`}
              aria-hidden="false"
            >
              ☀️
            </span>
            <span
              className={`${style.themeSwitchIcon} ${style.themeSwitchIconMoon}`}
              aria-hidden="false"
            >
              🌙
            </span>
            <span
              ref={thumbRef}
              className={style.themeSwitchThumb}
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
    </header>
  );
}

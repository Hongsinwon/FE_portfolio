import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faGithub } from "@fortawesome/free-brands-svg-icons";
import type { Metadata } from "next";
import style from "./layout.module.css";
import "./globals.css";
import "./reset.css";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Profile from "../components/profile";

export const metadata: Metadata = {
  title: "HongSinWon_Portfolio",
  description: "프론트엔드 개발자 Portfolio",
  openGraph: {
    title: "HongSinWon_Portfolio2025",
    description: "프론트엔드 개발자 Portfolio",
    images: ["/thumbnail.png"],
  },
  icons: {
    icon: "/favicon.ico", // 기본 파비콘
    shortcut: "/favicon.ico", // 브라우저 탭
    apple: "/apple-icon.png", // iOS용
  },
};

async function Header() {
  return (
    <header>
      <div className={style.headerBody}>
        <h1>
          <Link href={"/"}>SINWON FE Portfolio</Link>
        </h1>
      </div>
    </header>
  );
}

async function Footer() {
  return <footer>제작 ©HongSinWon_Frontend_Portfolio@</footer>;
}

async function ScrollButton() {
  return (
    <div>
      <button>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <button>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <Header />
          <main>
            <Profile />
            <section className={style.mainSection}>
              <div>스킬</div>
              <div className={style.mainWarp}>{children}</div>
            </section>
          </main>
          <Footer />
          <ScrollButton />
        </div>
      </body>
    </html>
  );
}

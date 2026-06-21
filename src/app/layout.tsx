import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import style from "./layout.module.css";
import "./globals.css";
import "./reset.css";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Profile from "../components/profile";

import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "HongSinWon_Portfolio",
  description: "SINWON FE Portfolio",
  openGraph: {
    title: "HongSinWon_Portfolio2025",
    description: "SINWON FE Portfolio",
    images: ["/thumbnail.png"],
  },
  icons: {
    icon: "/favicon.ico", // 기본 파비콘
    shortcut: "/favicon.ico", // 브라우저 탭
    apple: "/apple-icon.png", // iOS용
  },
};

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
